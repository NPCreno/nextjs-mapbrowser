"use client";

import React, { useState, useEffect, useMemo } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer, Popup, useMap } from "react-leaflet";
import { Icon } from "leaflet";
import { clinics } from "@/app/state/clinics";

interface MapProps {
  selectedState: number; // Defining the prop type
}

export default function Map({ selectedState }: MapProps) {
  const [zoomVal, setZoomVal] = useState(7);
  const [currentState, setCurrentState] = useState(selectedState);
  const [centerVal, setCenterVal] = useState(
    clinics[selectedState][0]?.geocode || [0, 0]
  );

  const customIcon = useMemo(
    () =>
      new Icon({
        iconUrl: "/locationMarker.png",
        iconSize: [38, 38],
      }),
    []
  );

  function handleSelectLocation(index: number) {
    const newCenter = clinics[currentState][index].geocode;
    if (zoomVal !== 20 || centerVal !== newCenter) {
      setZoomVal(20);
      setCenterVal(newCenter);
    }
  }

  useEffect(() => {
    if (clinics[selectedState]) {
      setZoomVal(7);
      setCurrentState(selectedState);
      setCenterVal(clinics[selectedState][0]?.geocode || [0, 0]);
    }
  }, [selectedState]);

  const MapUpdater = () => {
    const map = useMap();

    useEffect(() => {
      map.setView(centerVal, zoomVal);
    }, [centerVal, zoomVal, map]);

    return null;
  };

  return (
    <MapContainer center={centerVal} zoom={zoomVal}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {clinics[currentState]?.map((clinic) => (
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
      ))}
      <MapUpdater />
    </MapContainer>
  );
}
