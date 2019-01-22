import React from 'react';
import { UpdateLocation } from "./UpdateLocation.js";
import { DisplayMap } from "./DisplayMap.js";
// import { Icons } from "./Icons.js";

export const CurrentWeather = ({latitude, longitude, zoom, timezone, currentweather, gotdata, showForecast, toggleForecast}) => {
  let displayUpdateLocation = <UpdateLocation latitude={latitude} longitude={longitude} />
  let showCurrentWeather;
  let buttonShow7Days = <button onClick={toggleForecast}>Weather Forecast</button>

  if (showForecast) {
    buttonShow7Days = null;
  }

  if (gotdata) {
    let date = new Date(currentweather[0].time * 1000)

    showCurrentWeather =
    <>
      <p><b><i>{date.toString()}</i></b></p>
      <p><b><i>{timezone}</i></b></p>
      <p>Temperature: <b>{Math.round(currentweather[0].temperature)}°</b></p>
      <p>Summary: <b>{currentweather[0].summary}</b></p>
      <p>Wind Chill: <b>{Math.round(currentweather[0].apparentTemperature)}°</b></p>
      <p>Humidity: <b>{Math.round((currentweather[0].humidity)*100)}%</b></p>
      <p>Wind: <b>{Math.round(currentweather[0].windSpeed)} mph</b></p>
    </>;
  }

  return(
    <>
      <h1 className='title'> Weather DO</h1>
      <div className='infoDiv'>
        <div className='currentWeatherDiv'>
          {showCurrentWeather}
        </div>
        <div className="mapDiv">
          {displayUpdateLocation}
          <DisplayMap latitude={latitude} longitude={longitude} zoom={zoom}/>
        </div>
      </div>
      {buttonShow7Days}
    </>
  )
}
