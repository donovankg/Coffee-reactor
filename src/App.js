import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import News from './news/news';
import TwitterFeed from './twitterFeed/twitterFeed';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Coffee-reactor</h2>
        </div>
 
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <TwitterFeed />
        <News />

      </div>
    );
  }
}

export default App;
