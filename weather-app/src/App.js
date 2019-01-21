import React, { Component } from "react";
import axios from 'axios';
import secretKey from "./secret.json";
import { geoFindMe } from "./geolocation.js";
import { WeekDayForecast } from "./WeekDayForecast.js";
import { DisplayMap } from "./DisplayMap.js";
import { CurrentWeather } from "./CurrentWeather.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      latitude: "",
      longitude: "",
      gotdata: false,
      timezone: "",
      currentweather: [],
      weekdayweather: [],
      zoom: 11,
    };
  }

// Sets latitude & longitude from browser Geolocation API
  findLocation = () => {
    geoFindMe().then(position => {
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      });

    });
  };

  getWeatherData = () => {
    let { latitude, longitude } = this.state;
    axios.get(
      `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${secretKey.secretKey}/${latitude},${longitude}`
    )
    .then(response => {
      debugger
      this.populateState(response);
      debugger
    })
  };

  populateState = (response) =>{
    this.setState((state) => {

      return {timezone: response.data.timezone,
        currentweather: [response.data.currently],
        weekdayweather: [response.data.daily],
        gotdata: true,
      };
    });
  }

  render() {
    console.log(this.state);
    console.log(secretKey.secretKey);
    let { latitude, longitude, zoom, timezone, currentweather, gotdata, weekdayweather } = this.state;

    return (
      <React.Fragment>
        <CurrentWeather latitude={latitude} longitude={longitude} timezone={timezone} currentweather={currentweather} gotdata={gotdata} findLocation={this.findLocation}/>
        <DisplayMap latitude={latitude} longitude={longitude} zoom={zoom}/>
        <WeekDayForecast latitude={latitude} longitude={longitude} weekdayweather={weekdayweather} gotdata={gotdata} getWeatherData={this.getWeatherData}/>
      </React.Fragment>
    );
  }
}

export default App;
