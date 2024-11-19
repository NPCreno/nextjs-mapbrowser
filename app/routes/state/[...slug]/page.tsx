import React from "react";
import { clinics } from "../clinics";
import { notFound } from "next/navigation";
import State from "../page";
import Map from "@/app/components/Map/Map";
export default function States({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
  const validStates = clinics
    .map((clinicArray) => clinicArray[0]?.state)
    .filter(Boolean);
  // Check if the slug exists in the list of valid states
  if (!validStates.includes(params.slug[0])) {
    return notFound();
  } else if (validStates.includes(params.slug[0])) {
    return (
      <>
        <div className="w-auto h-50vh">
          <Map
            selectedState={
              params.slug[0] === "PA"
                ? 0
                : params.slug[0] === "VA"
                ? 1
                : params.slug[0] === "WV"
                ? 2
                : 0
            }
          ></Map>
        </div>
      </>
    );
  }
}
