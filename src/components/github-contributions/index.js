
import React from "react";

import contributionsData from '../../data/contributions';
import ContributionsFormatter from './formatter';
import MonthLabels from './month-labels';
import WeekLabels from './week-labels';
import Week from './week';
import './github-contributions.scss';


export default class GithubContributions extends React.Component {

  constructor(props){
    super(props);

    this.state = { data: new ContributionsFormatter(contributionsData) };
  }

  render() {
    const { data } = this.state;

    return (
      <div id="github-contributions">

        <MonthLabels numberOfMonths={data.numberOfMonths} startingMonth={data.startingMonth} />

        <div id="weeks-wrapper">
          <WeekLabels />
          {Object.entries(data.weeks).map(entry => (
            <Week key={'week-' + entry[0]} days={entry[1]} />
          ))}
        </div>

      </div>
    )
  }
}
