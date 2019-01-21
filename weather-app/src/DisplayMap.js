import React from 'react';
import GoogleMapReact from 'google-map-react';

export const DisplayMap = ({latitude, longitude, zoom}) => {

  let center = {
    lat: latitude,
    lng: longitude
  }

  if (latitude && longitude) {
    return (

      <div className='map'>
        <GoogleMapReact
          defaultCenter={center}
          defaultZoom={zoom}>
        </GoogleMapReact>
      </div>
    );
  } else {
    return null;
  }
}
