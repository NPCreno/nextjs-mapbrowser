"use client";

import React, { use, useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import { locations } from "./locations";
import { Icon } from "leaflet";

const customIcon = new Icon({
  iconUrl: "locationMarker.png",
  iconSize: [38, 38],
});

export default function Map() {
  const [centerVal, setCenterVal] = useState([39.9944, -75.6066]);
  const [zoomVal, setZoomVal] = useState(4);
  const [currentState, setCurrentState] = useState(0);

  function changeState(index) {
    setCurrentState(index);
  }

  function handleSelectLocation(index: number) {
    setZoomVal(20);
    setCenterVal(locations[0][index].geoCode);
    console.log("new center value:", centerVal);
  }

  return (
    <>
      <MapContainer center={centerVal} zoom={zoomVal}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations[currentState].map((location, index) => (
          <div>
            <Marker
              key={index}
              position={location.geoCode}
              icon={customIcon}
              eventHandlers={{
                click: () => handleSelectLocation(index),
              }}
            >
              <Popup key={index}>{location.name}</Popup>
            </Marker>
          </div>
        ))}
      </MapContainer>
      <div className="flex w-lvw justify-evenly">
        <button
          className="w-auto border bg-blue-300 hover:bg-blue-400 p-3 rounded"
          onClick={() => changeState(0)}
        >
          Virginia
        </button>
        <button
          className="w-auto border bg-blue-300 hover:bg-blue-400 p-3 rounded"
          onClick={() => changeState(1)}
        >
          Pennsylvania
        </button>
        <button
          className="w- border bg-blue-300 hover:bg-blue-400 p-3 rounded"
          onClick={() => changeState(2)}
        >
          West Virginia
        </button>
      </div>
    </>
  );
}
