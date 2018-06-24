
import React from "react";
import _ from 'lodash';

import Day from './day';


export default class GithubContributions extends React.Component {
  render() {
    let { days } = this.props;
    days = _.orderBy(days, 'dayOfWeek');

    return (
      <div className="week">
        {days.map(day => (
          <Day key={day} {...day} />
        ))}
      </div>
    )
  }
}
