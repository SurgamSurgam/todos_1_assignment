import React from 'react';

export const UpdateLocation = ({latitude, longitude, findLocation}) => {

  return(
    <>
      <p>Latitude is {latitude}° </p>
      <p>Longitude is {longitude}°</p>
      <button onClick={findLocation}>Get GPS Coordinates</button>
    </>
  )
}
