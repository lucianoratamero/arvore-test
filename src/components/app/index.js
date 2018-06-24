import React, { Component } from 'react';

import GithubContributions from '../github-contributions';
import logo from './logo.svg';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Árvore's coding challenge</h1>
        </header>
        <p className="App-container">
          <GithubContributions />
        </p>
      </div>
    );
  }
}
