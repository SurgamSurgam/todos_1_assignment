import React from 'react';
import { ForecastLayout } from './ForecastLayout.js';

export const WeekDayForecast = ({ weekdayweather, gotdata, showForecast }) => {

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
      <table style={{ width: "75%" }}>
        <thead>
          <tr>
            <th>Day</th>
            <th>Description</th>
            <th>High/Low</th>
            <th>Precip</th>
            <th>Wind</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {mappedDailyWeatherData}
        </tbody>
      </table>
    );
  };


  if (showForecast) {
    return(
      <>
        <h1>This Week's Forecast</h1>
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
