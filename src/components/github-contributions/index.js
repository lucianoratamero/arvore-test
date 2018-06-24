
import React from "react";

import contributionsData from '../../data/contributions';
import ContributionsFormatter from './formatter';
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
        <p>Period: {data.period}</p>
        <p>Max: {data.max}</p>
        <p>Min: {data.min}</p>
        <p>Total: {data.total}</p>
        {data.items.map(contributions => (
          <p key={contributions.date}>{contributions.date} - {contributions.count} - {contributions.color}</p>
        ))}
      </div>
    )
  }
}
