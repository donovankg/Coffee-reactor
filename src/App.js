
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from 'react-bootstrap/lib/Navbar';
import Button from 'react-bootstrap/lib/Button';
import Clock from 'react-clock';


import Navbar from 'react-bootstrap/lib/Navbar';
import Button from 'react-bootstrap/lib/Button';
import Clock from 'react-clock';

import News from './news/news';
import Weather from  './weatherApp/weatherApp';
import TwitterFeed from './twitterFeed/twitterFeed';
import Transaction from './transactionApp/transactionApp';



class App extends Component {
  render() {
    return (
      <div className="App">
<<<<<<< HEAD
=======

>>>>>>> 5d53f8053bdce4f32c93ec36923c5897d97c7a04
      <Navi>
      </Navi>

          <DashContent>
          </DashContent>

<<<<<<< HEAD
=======

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Coffee-reactor</h2>
        </div>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <TwitterFeed />
          <News />
          <Weather />
          <Transaction />

>>>>>>> 5d53f8053bdce4f32c93ec36923c5897d97c7a04
      </div>
    );
  }
}

class Navi extends Component {
  render() {
    return (
      <div className="navi">
      <Navbar bsStyle ='nav' fixedTop fluid>
    <Navbar.Header >
      <Navbar.Brand>
        <img src ={logo} className ="logo"/>
      </Navbar.Brand>
    </Navbar.Header>
    <Navbar.Text >
      <h2>
        <Clock/>
      </h2>
    </Navbar.Text>
    </Navbar>
    </div>
    );
  }
}

class DashContent extends Component {
  render () {
    return (
      <div className ="container-fluid" id="containerContent" >
      <div className="row">

    <div className="col-md-4">

      <div className="row">
        <div className="col-md-12">
        <div className ="container-fluid titles">
          <h4>Twitter</h4>
        </div>
          <div  className="content-top">
          </div>
        </div>
        <div className="col-md-12">
        <div className ="container-fluid titles">
          <h4>Music</h4>
        </div>
          <div  className="content-bottom"></div>
        </div>

      </div>
    </div>
    <div className="col-md-8">
      <div className="row">
        <div id="news" className="col-md-12">
          <div className ="container-fluid titles">
            <h4>News</h4>
          </div>

          <div  className="content-top" ></div>
        </div>
      </div>
      <div className="row">

        <div className="col-md-8">
        <div className ="container-fluid titles">
          <h4>Fitness Tracker</h4>
        </div>
        <div className="col-md-12 content-top "></div>

      </div>

      <div className="col-md-4">
      <div className ="container-fluid titles">
        <h4>Weather</h4>
      </div>
        <div className="col-md-12 content-bottom">
        </div>

    </div>

</div>
</div>
</div>
</div>

    )
  }
}

export default App;
