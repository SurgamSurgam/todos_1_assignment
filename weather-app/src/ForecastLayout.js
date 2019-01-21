import React from "react";

export const ForecastLayout = props => {
  let {time, summary, tempHigh, tempLow, precipitation, wind, humidity } = props;
  return (
    <>
      <tr>
        <td>{time}</td>
        <td>{summary}</td>
        <td>{tempHigh}</td>
        <td>{tempLow}</td>
        <td>{precipitation}</td>
        <td>{wind}</td>
        <td>{humidity}</td>
      </tr>
    </>
  );
};
