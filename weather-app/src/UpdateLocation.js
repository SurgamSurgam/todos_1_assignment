import React from "react";

export const UpdateLocation = ({ latitude, longitude }) => {
  return (
    <>
      <p>
        GPS <i>Coordinates: Latitude <b>{latitude}°</b> | Longitude <b>{longitude}°</b></i>
      </p>
    </>
  );
};
