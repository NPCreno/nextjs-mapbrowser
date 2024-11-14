"use client";

import React, { use, useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import { davaoLandmarks } from "./locations";
import { Icon } from "leaflet";

const customIcon = new Icon({
  iconUrl: "locationMarker.png",
  iconSize: [38, 38],
});

const Map = () => {
  const [centerVal, setCenterVal] = useState([7.1206743, 125.6214154]);
  const [zoomVal, setZoomVal] = useState(20);

  function handleSelectLocation(index: number) {
    setZoomVal(20);
    setCenterVal(davaoLandmarks[index].geoCode);
    console.log("new center value:", centerVal);
  }

  return (
    <MapContainer center={centerVal} zoom={zoomVal}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {davaoLandmarks.map((davaoLandmark, index) => (
        <div>
          <button onClick={() => handleSelectLocation(index)}>
            <Marker
              key={index}
              position={davaoLandmark.geoCode}
              icon={customIcon}
              eventHandlers={{
                click: () => handleSelectLocation(index),
              }}
            >
              <Popup key={index}>{davaoLandmark.name}</Popup>
            </Marker>
          </button>
        </div>
      ))}
    </MapContainer>
  );
};

export default Map;
