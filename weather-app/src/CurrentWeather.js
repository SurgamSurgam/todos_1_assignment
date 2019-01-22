import React from 'react';
import { UpdateLocation } from "./UpdateLocation.js";
import { DisplayMap } from "./DisplayMap.js";
// import { Icons } from "./Icons.js";

export const CurrentWeather = (props) => {
  let {latitude, longitude, zoom, timezone, currentweather, gotdata, showForecast, toggleForecast} = props;

  let displayUpdateLocation = <UpdateLocation latitude={latitude} longitude={longitude} />
  let showCurrentWeather;
  let buttonShow7Days = <button onClick={toggleForecast}>Get 7-Day Weather Forecast</button>

  if (showForecast) {
    buttonShow7Days = null;
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
        {displayUpdateLocation}
        <DisplayMap latitude={latitude} longitude={longitude} zoom={zoom}/>
        {showCurrentWeather}
        {buttonShow7Days}
      </div>

    </>
  )
}
