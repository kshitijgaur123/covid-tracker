import React from 'react'
import {  Map as LeafletMap,MapContainer, TileLayer, Marker } from 'react-leaflet';
import './Map.css'
import { showDataOnMap } from './util';
function Map({ casesType, countries, center, zoom }) {
    return (
      <div className="map">
        <MapContainer className='mapContainer' center={center} zoom={zoom}>
            {console.log(center)}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {showDataOnMap(countries,casesType)}
        
        </MapContainer>
      </div>
    );
  }

export default Map
