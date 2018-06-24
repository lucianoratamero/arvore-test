import React, { Component } from 'react';

import GithubContributions from '../github-contributions';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="/arvore-test/logo.svg" className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Árvore's coding challenge</h1>
        </header>
        <div className="App-container">
          <GithubContributions />
        </div>
      </div>
    );
  }
}
