import React from 'react';
import { UpdateLocation } from "./UpdateLocation.js";
// import { Icons } from "./Icons.js";

export const CurrentWeather = (props) => {
  let {latitude, longitude, timezone, currentweather, findLocation, gotdata} = props;

  let displayUpdateLocation;
  let showCurrentWeather;

  if (!latitude && !longitude) {
    displayUpdateLocation = <UpdateLocation latitude={latitude} longitude={longitude} findLocation={findLocation}/>;
  }

  if (gotdata) {
    let date = new Date(currentweather[0].time * 1000)

    showCurrentWeather =
    <>
      <h2>{date.toString()}</h2>
      <h2>{timezone}</h2>
      <h1>Temperature: {Math.round(currentweather[0].temperature)}°</h1>
      <h2>Summary: {currentweather[0].summary}</h2>
      <h3>Wind Chill: {Math.round(currentweather[0].apparentTemperature)}°</h3>
      <h3>Humidity: {Math.round(currentweather[0].humidity)}%</h3>
      <h3>Wind: {Math.round(currentweather[0].windSpeed)} mph</h3>
    </>;
  }

  return(
    <>
      <h1 className='title'>DO Weather</h1>
      <div className='currentWeatherDiv'>
        <h2>{displayUpdateLocation}</h2>
        {showCurrentWeather}
      </div>
    </>
  )
}
