
import React from "react";

import contributionsData from '../../data/teste_arvore_data';
import './github-contributions.scss';


export default class GithubContributions extends React.Component {
  render() {
    return (
      <div id="github-contributions">
        {JSON.stringify(contributionsData)}
      </div>
    )
  }
}
