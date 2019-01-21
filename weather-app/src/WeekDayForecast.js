import React from 'react';
import { ForecastLayout } from './ForecastLayout.js';

export const WeekDayForecast = ({getWeatherData, latitude, longitude, timezone, currentweather, weekdayweather, gotdata}) => {

  let weeksummary;
  let mappedDailyWeatherData;
  let showTableHeader;

  if (gotdata) {
    weeksummary = weekdayweather[0].summary;

    mappedDailyWeatherData = weekdayweather[0].data.map(day => {
      return(
          <ForecastLayout time={new Date(day.time * 1000).toDateString()} summary={day.summary} tempHigh={day.temperatureHigh} tempLow={day.temperatureLow}
          precipitation={day.precipProbability}
          wind={day.windSpeed}
          humidity={day.humidity} />
      )
    });

    showTableHeader = (
      <table>
        <tr>
          <th>Day</th>
          <th>Description</th>
          <th>High/Low</th>
          <th>Precip</th>
          <th>Wind</th>
          <th>Humidity</th>
        </tr>
        {mappedDailyWeatherData}
      </table>
    )
  }


  if (latitude && longitude) {
    return(
      <>
        <h1>This Week's Forecast</h1>
        <button onClick={getWeatherData}> Get 5-Day Weather </button>
        <p>{weeksummary}</p>
        {showTableHeader}
      </>
    )
  } else {
    return(
      null
    )
  }
}
