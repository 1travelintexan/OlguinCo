import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
//Don't forget to import the css
import "leaflet/dist/leaflet.css";

function MyMap() {
  //Some random co-ordinate
  const position = [30.333, -95.465];

  //Do not forget to set a width and height style to your map. Else it won't show up
  return (
    <div className="map">
      <MapContainer
        style={{ width: "300px", height: "300px" }}
        center={position}
        zoom={10}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}

export default MyMap;
