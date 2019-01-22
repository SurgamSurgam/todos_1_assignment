import React, { Component } from "react";
import axios from 'axios';
import secretKey from "./secret.json";
import { geoFindMe } from "./geolocation.js";
import { WeekDayForecast } from "./WeekDayForecast.js";
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
      showForecast: false
    };
  }

  componentDidMount() {
    // Sets latitude & longitude from browser Geolocation API
    geoFindMe().then(position => {

      axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${secretKey.secretKey}/${position.coords.latitude},${position.coords.longitude}`
      )
      .then(response => {
        this.populateState(response);
      })
      .catch(err => {
        console.log('error from darksky api', err);
      })
    })
    .catch(err => {
      console.log('error from geolocation api', err);
    })
  }

  populateState = (response) =>{
    this.setState((state) => {
      return {
        latitude: response.data.latitude,
        longitude: response.data.longitude,
        timezone: response.data.timezone,
        currentweather: [response.data.currently],
        weekdayweather: [response.data.daily],
        gotdata: true,
      };
    });
  }

  // Displays 7-Day Weather
  toggleForecast = () => {
    this.setState({
      showForecast: !this.state.showForecast,
    })
  }

  render() {
    console.log(this.state);
    let { latitude, longitude, zoom, timezone, currentweather, gotdata, weekdayweather, showForecast } = this.state;

    if (showForecast) {
      return(
        <>
          <WeekDayForecast latitude={latitude} longitude={longitude} weekdayweather={weekdayweather} gotdata={gotdata} getWeatherData={this.getWeatherData} showForecast={showForecast} toggleForecast={this.toggleForecast} />
        </>
      )
    } else if (!showForecast) {
      return (
        <React.Fragment>
          <CurrentWeather latitude={latitude} longitude={longitude} zoom={zoom} timezone={timezone} currentweather={currentweather} gotdata={gotdata} showForecast={showForecast} toggleForecast={this.toggleForecast}/>

        </React.Fragment>
      );
    }
  }
}

export default App;
