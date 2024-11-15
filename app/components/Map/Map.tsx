"use client";

import React, { use, useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer, Popup, useMap } from "react-leaflet";
import { locations } from "./locations";
import { Icon } from "leaflet";
import { clinics } from "@/app/state/clinics";

const customIcon = new Icon({
  iconUrl: "locationMarker.png",
  iconSize: [38, 38],
});

interface MapProps {
  selectedState: number; // Defining the prop type
}

export default function Map({ selectedState }: MapProps) {
  const [zoomVal, setZoomVal] = useState(8);
  const [currentState, setCurrentState] = useState(selectedState);
  const [centerVal, setCenterVal] = useState(clinics[selectedState][0].geocode);

  function handleSelectLocation(index: number) {
    setZoomVal(20);
    setCenterVal(clinics[currentState][index].geocode);
    console.log(
      "new center value:",
      centerVal,
      "zoom value changed: ",
      zoomVal
    );
  }

  return (
    <>
      <MapContainer center={centerVal} zoom={zoomVal}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {clinics[currentState].map((clinic) => {
          console.log(clinic.id);
          return (
            <Marker
              key={clinic.id}
              position={clinic.geocode}
              icon={customIcon}
              eventHandlers={{
                click: () => handleSelectLocation(clinic.id - 1),
              }}
            >
              <Popup>{clinic.name}</Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </>
  );
}
