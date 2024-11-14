// pages/index.tsx
import dynamic from "next/dynamic";
import { FC } from "react";

// Dynamically import the Map component with SSR disabled
const DynamicMap = dynamic(() => import("./Map"), { ssr: false });

const Home: FC = () => {
  return (
    <div>
      <h1>Map Example with Leaflet</h1>
      <DynamicMap />
    </div>
  );
};

export default Home;
