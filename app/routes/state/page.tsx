"use client";
import { useState } from "react";
import { clinics } from "./clinics";
import Map from "@/app/components/Map/Map";
import Link from "next/link";
const state: React.FC = () => {
  const [currentState, setCurrentState] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleClinics = clinics[currentState].slice(
    currentIndex,
    currentIndex + 4
  );
  const maxIndex = clinics.length - 4;
  const totalDots = Math.ceil(clinics[currentState].length / 4);

  function changeState(index: number) {
    setCurrentState(index);
  }
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? clinics[currentState].length - 4 : prevIndex - 1
    );
    console.log("current index is at:", currentIndex);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 4 >= clinics[currentState].length ? 0 : prevIndex + 1
    );
    console.log("current index is at:", currentIndex);
  };

  return (
    <>
      <div className="w-auto h-50vh">
        <Map selectedState={currentState}></Map>
      </div>
      <div className="flex justify-center items-center flex-col space-y-4 mt-8">
        <h2 className="text-xl font-semibold text-gray-800">Select a State</h2>
        <div className="flex space-x-6">
          <Link href={"/routes/state/VA"}>
            <button
              className={`w-auto px-6 py-3 border rounded-lg text-white font-medium transition duration-300 ${
                currentState === 0
                  ? "bg-blue-600 hover:bg-blue-500"
                  : "bg-blue-300 hover:bg-blue-400"
              }`}
              onClick={() => changeState(0)}
            >
              Virginia
            </button>
          </Link>
          <Link href={"/routes/state/PA"}>
            <button
              className={`w-auto px-6 py-3 border rounded-lg text-white font-medium transition duration-300 ${
                currentState === 1
                  ? "bg-blue-600 hover:bg-blue-500"
                  : "bg-blue-300 hover:bg-blue-400"
              }`}
              onClick={() => changeState(1)}
            >
              Pennsylvania
            </button>
          </Link>
          <Link href={"/routes/state/WV"}>
            <button
              className={`w-auto px-6 py-3 border rounded-lg text-white font-medium transition duration-300 ${
                currentState === 2
                  ? "bg-blue-600 hover:bg-blue-500"
                  : "bg-blue-300 hover:bg-blue-400"
              }`}
              onClick={() => changeState(2)}
            >
              West Virginia
            </button>
          </Link>
        </div>
      </div>
      <div className="relative w-full max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {clinics[currentState].map((clinic) => (
            <div
              key={clinic.id}
              className="rounded-lg overflow-hidden bg-white shadow-md p-4 min-h-80 max-h-80"
            >
              <img
                src={clinic.image}
                alt={clinic.alt}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-lg font-bold mt-2">{clinic.name}</h3>
              <p className="text-sm text-gray-600">{clinic.address}</p>
              <p className="text-sm text-gray-600">{clinic.hours}</p>
            </div>
          ))}
        </div>

        <div className="w-full flex justify-between py-3">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`left-4 transform bg-gray-800 text-white p-2 rounded-full 
    hover:bg-gray-600 focus:outline-none ${
      currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
    }`}
          >
            &lt;
          </button>
          <div className="flex justify-center space-x-2 mt-4">
            {[...Array(totalDots)].map((_, idx) => (
              <div
                key={idx}
                className={`w-3 h-3 rounded-full ${
                  idx === Math.floor(currentIndex / 4)
                    ? "bg-gray-800"
                    : "bg-gray-400"
                }`}
              ></div>
            ))}
          </div>
          <button
            disabled={currentIndex === maxIndex}
            onClick={handleNext}
            className={`left-4 transform bg-gray-800 text-white p-2 rounded-full 
            hover:bg-gray-600 focus:outline-none ${
              currentIndex === maxIndex ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            &gt;
          </button>
        </div>
      </div>
    </>
  );
};

export default state;
