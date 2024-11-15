import Image from "next/image";
import "leaflet/dist/leaflet.css";
import Map from "./components/Map/Map";

export default function Home() {
  return (
    <div>
      <h1>This is a sample map browser from leaflet and openstreetmap</h1>
      <div className="h-svh">
        <Map></Map>
      </div>
    </div>
  );
}
