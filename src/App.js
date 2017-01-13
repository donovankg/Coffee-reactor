import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import News from './news/news';
// import Calendar from './calendar/calendar';
// import Weather from  './weatherApp/weatherApp';
// import TwitterFeed from './twitterFeed/twitterFeed';
import Transaction from './transactionApp/transactionApp';


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
        {/*  <Calendar />
          <TwitterFeed />
          <News />
          <Weather />*/}

            <Transaction />

      </div>
    );
  }
}

export default App;
