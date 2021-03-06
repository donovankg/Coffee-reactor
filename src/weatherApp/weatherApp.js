

import React, {Component} from 'react';
class Weather extends Component {

  constructor(props){
    super(props);
    this.notify= this.notify.bind(this);
    this.state={
      city: '',
      temp: '',
      description: '',
      icon: ''
    }
  };
  componentDidMount(){
    this.WeatherList('Garland');
  }

  notify(event){
    if(event.key === "Enter"){
      var newCity = event.target.value;

      console.log(newCity);

      this.WeatherList(newCity);
    }
  }

  WeatherList(newCity){
    console.log(this.state.city)
    return fetch("http://api.openweathermap.org/data/2.5/forecast?units=metric&q="+newCity+"&mode=json&appid=5babe75ca0e2081709ac0eda2202d4f9")
    // return fetch("https://api.openweathermap.org/data/2.5/forecast?units=metric&q="+newCity+"&mode=json&appid=5babe75ca0e2081709ac0eda2202d4f9")

      .then((response)=>response.json())
      .then((responseJson) =>{
        this.setState({city: responseJson.city.name,
                       temp: responseJson.list[0].main.temp,
                       description: responseJson.list[0].weather[0].description,
                       icon: responseJson.list[0].weather[0].icon})
      })

  };
  render(){
    return (
      <div>
        <div id="layout-content" className="layout-content-wrapper">
            <div className="main-info-city-name">{ this.state.city }</div>
            <img src={ "https://openweathermap.org/img/w/" + this.state.icon + ".png" } alt="weather_icon" className="day-info-img" />
            <div className="main-info-description">{ this.state.description }</div>
		        <div className="main-info-temp">{ Math.round(((this.state.temp)*1.8)+32) } °F</div>
        </div>
      </div>
    );
  };
};
export default Weather;
