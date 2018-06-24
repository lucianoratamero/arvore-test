
import React from "react";
import moment from 'moment';


export default class WeekLabels extends React.Component {

  get labels() {
    return moment.weekdaysShort();
  }

  render() {
    return (
      <div id="week-labels">
        {this.labels.map((week, i) => (
          <div
            key={'week-' + i}
            className={"week-label" + (i % 2 ? '' : ' transparent')}
          >
            {week}
          </div>
        ))}
      </div>
    )
  }

}
