import React from "react";
import { Map, TileLayer } from "react-leaflet";
import DisplayIcons from "./DisplayIcons";
import "./mapContainer.css";
import "./mapIconsContainer.css";

const maxBounds = [
  [0, -176.59],
  [85.455, 38]
];

const position = [70.505, -75.09];

function MapContainer() {
  return (
    <Map
      center={position}
      maxBounds={maxBounds}
      zoom={4}
      onClick={event => console.log([event.latlng.lat, event.latlng.lng])}
    >
      <TileLayer minZoom={3} maxZoom={6} url="/images/tiles/{z}/{x}/{y}.png" />

      <div>
        <DisplayIcons />
      </div>
    </Map>
  );
}

export default MapContainer;
