import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useState } from 'react';

const containerStyle = {
  width: '740px',
  height: '420px',
};

const onLoad = marker => {
  console.log('marker: ', marker)
}

const DetailMap = ({place}) => {
  return (
    <div>
      <LoadScript
        googleMapsApiKey="AIzaSyCrXhf7dS8MZ1tiCUiy-y-yVfy_GToWCNA"
        language="en"
        region="KR"
      >
        <GoogleMap mapContainerStyle={containerStyle} 
        center={{lat: place.mapy, lng: place.mapx}}
        zoom={18}>

        <Marker
          onLoad={onLoad}
          position={
            {lat: place.mapy,
            lng: place.mapx}
          }/>
          {/* <Marker position={lat:37.4692, lng: 126.451}/> */}
          <></>
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default DetailMap;
