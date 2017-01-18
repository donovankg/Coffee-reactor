
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cal from './calendar/calendar';
import Navbar from 'react-bootstrap/lib/Navbar';
import Button from 'react-bootstrap/lib/Button';
import Clock from 'react-clock';
import News from './news/news';
import Weather from  './weatherApp/weatherApp';
import Cal from './calendar/calendar';
import TwitterFeed from './twitterFeed/twitterFeed';
import Transaction from './transactionApp/transactionApp';
import Modal from 'react-bootstrap/lib/Modal';


// http://react-component.github.io/calendar/
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      pickEvent:[],
      selectedEvent: null
    };
  }
  render() {
    return (
      <div className="App">

        <Navi></Navi>
        <DashContent>
        </DashContent>

        <Transaction />

        <Cal />

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

const DashContent = React.createClass ({
  getInitialState () {
    return { showModal: false};
  },
  close () {
    this.setState({ showModal: false});
  },
  open () {
    this.setState({ showModal: true});
  },
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
        <label>
          <span><h4>Calendar</h4></span>
          </label>
          <button type="submit" className="btn btn-default pull-right btn-sm cal-button"
            onClick = {this.open}>

          Add Event
          </button>
          <Modal bsSize="large" show ={this.state.showModal} onHide = {this.close}>
            <Modal.Body>
              <h4>Modal is working</h4>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.close}>Close</Button>
            </Modal.Footer>
          </Modal>

        </div>
        <div className="col-md-12 content-top ">
          <Cal >
          </Cal>
        </div>

      </div>

      <div className="col-md-3">
      <div className ="container-fluid titles">
        <h4>Weather</h4>
      </div>
        <div id='weather' className="col-md-12 content-bottom">
        <Weather />
        </div>
        <Transaction />

    </div>

</div>
</div>
</div>
</div>

    )
  }
})

export default App;
