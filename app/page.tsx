import Image from "next/image";
import "leaflet/dist/leaflet.css";
import Map from "./components/Map/Map";
export default function Home() {
  return (
    <div className="h-lvh">
      <div className="h-12">
        <Map selectedState={0}></Map>
      </div>
    </div>
  );
}
