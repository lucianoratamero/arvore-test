
import React from "react";
import _ from 'lodash';
import moment from 'moment';


export default class MonthLabels extends React.Component {

  get labels() {
    const { numberOfMonths } = this.props;
    const months = moment.monthsShort();

    let startingMonth = _.clone(this.props.startingMonth);
    let labels = [];

    for (let i = 0; i < numberOfMonths; i++) {
      labels.push(months[startingMonth]);

      if (startingMonth < 11) { startingMonth++; } else { startingMonth = 0; }
    }

    return labels;
  }

  render() {
    return (
      <div id="month-labels">
        {this.labels.map((month, i) => (
          <div key={'month-' + i} className="month-label">{month}</div>
        ))}
      </div>
    )
  }

}
