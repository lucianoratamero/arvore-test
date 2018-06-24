
import _ from 'lodash';
import moment from 'moment';


export default class ContributionsFormatter {
  constructor(data) {
    this.items = data;
    this.period = '2016 - 2017';
    this.colorSteps = ['#eee', '#c6e48b', '#7bc96f', '#239a3b', '#196127'];
    this.percentileSteps = [10, 30, 50, 70, 90];
    this.weeks = {}

    this._populateItemsIntoWeeks(this.items, this.weeks);

    for (let i = 0; i < this.items.length; i++) {
      let item = this.items[i];
      item.color = this._colorStepByContributions(item.count);
    }
  }

  get max() { return _.maxBy(this.items, 'count').count; }
  get min() { return _.minBy(this.items, 'count').count; }
  get total() { return this.items.length; }

  _populateItemsIntoWeeks(items, weeks){
    for (let i = 0; i < items.length; i++) {
      let item = items[i];
      item.moment = moment(item.date);
      item.dayOfWeek = item.moment.day();

      const yearAndWeek = `${item.moment.year()} - ${item.moment.week()}`;
      weeks[yearAndWeek] = weeks[yearAndWeek] || [];
      weeks[yearAndWeek].push(item);
    }
  }

  _closestNumber(percentile) {
    let minDiff = 100,
      step = 0,
      closest;

    for (step in this.percentileSteps) {
      var currentDiff = Math.abs(percentile - this.percentileSteps[step]);
      if (currentDiff < minDiff) {
        minDiff = currentDiff;
        closest = this.percentileSteps[step];
      }
    }

    return closest;
  }

  _colorStepByContributions(count) {
    const countPercentile = 100 * count / (this.max - this.min);

    const closestPercentile = this._closestNumber(countPercentile);
    const step = this.percentileSteps.indexOf(closestPercentile);

    return this.colorSteps[step];
  }
}
