import React from 'react';
import { ForecastLayout } from './ForecastLayout.js';

export const WeekDayForecast = ({ weekdayweather, gotdata, showForecast, toggleForecast }) => {
  let weeksummary;
  let mappedDailyWeatherData;
  let showTableHeader;

  if (gotdata) {
    weeksummary = weekdayweather[0].summary;

    mappedDailyWeatherData = weekdayweather[0].data.map(day => {
      return(
          <ForecastLayout time={new Date(day.time * 1000).toDateString()} summary={day.summary} tempHigh={Math.round(day.temperatureHigh)} tempLow={Math.round(day.temperatureLow)}
          precipitation={(day.precipProbability)*100}
          wind={Math.round(day.windSpeed)}
          humidity={Math.round((day.humidity)*100)} />
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

  let buttonShowCurrent = <button onClick={toggleForecast}>Current Weather</button>


    return(
      <>
        <div className="forecastDiv">
          <h1>This Week's Forecast</h1>
          <p>Summary: <i><b>{weeksummary}</b></i></p>
          {showTableHeader}
          <br/>
          {buttonShowCurrent}
        </div>
      </>
    )

}
