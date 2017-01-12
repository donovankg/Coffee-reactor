
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
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
      <Navi>
      </Navi>

          <DashContent>
          </DashContent>

          <Transaction />
      </div>
    );
  }
}

class Navi extends Component {
  render() {
    return (
      <div>

    <nav className="navbar  navbar-fixed-top">
    <div className="container">


  <img src ={logo} className ="logo"/>

    <div className ="navbar-text">
      <h2>
        <Clock/>
      </h2>
    </div>
  </div>
</nav>
    </div>
    );
  }
}

class DashContent extends Component {
  render () {
    return (
      <div className ="container-fluid dash" >
      <div className="row">

    <div className="col-md-4">

      <div className="row">
        <div className="col-md-12">
        <div className ="container-fluid titles">
          <h4>Twitter</h4>
        </div>

          <div id= 'twitter'className="content-top">
            <TwitterFeed />
          </div>
        </div>
        <div className="col-md-12">
        <div className ="container-fluid titles">
          <h4>Music</h4>
        </div>
          <div  className="content-bottom">
            <iframe id="sc-widget" src="https://w.soundcloud.com/player/?url=http://api.soundcloud.com/users/1539950/favorites" width="100%" height="465" scrolling="no" frameborder="no"></iframe>
          </div>
        </div>

      </div>
    </div>
    <div className="col-md-8">
      <div className="row">
        <div id="news" className="col-md-12">
          <div className ="container-fluid titles">
            <h4>News</h4>
          </div>

          <div  className="content-top" >
            <News />
          </div>
        </div>
      </div>
      <div className="row">

        <div className="col-md-9">
        <div className ="container-fluid titles">
          <h4>Fitness Tracker</h4>
        </div>
        <div className="col-md-12 content-top "></div>

      </div>

      <div className="col-md-3">
      <div className ="container-fluid titles">
        <h4>Weather</h4>
      </div>
        <div id='weather' className="col-md-12 content-bottom">
        <Weather />
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
