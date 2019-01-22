import React from "react";

export const UpdateLocation = ({ latitude, longitude }) => {
  return (
    <>
      <p>
        GPS Coordinates: Latitude {latitude}° | Longitude {longitude}°
      </p>
    </>
  );
};
