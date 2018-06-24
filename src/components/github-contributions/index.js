
import React from "react";

import contributionsData from '../../data/contributions';
import ContributionsFormatter from './formatter';
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
        {Object.entries(data.weeks).map(entry => (
          <Week key={'week-' + entry[0]} days={entry[1]} />
        ))}
      </div>
    )
  }
}
