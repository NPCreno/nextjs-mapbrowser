"use client";
import { useState } from "react";
import { clinics } from "./clinics";
import Map from "../components/Map/Map";

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleClinics = clinics.slice(currentIndex, currentIndex + 4);
  const maxIndex = clinics.length - 4;
  const totalDots = Math.ceil(clinics.length / 4);
  const activeDotIndex = Math.min(Math.floor(currentIndex / 4), totalDots - 1);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? clinics.length - 4 : prevIndex - 1
    );
    console.log("current index is at:", currentIndex);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 4 >= clinics.length ? 0 : prevIndex + 1
    );
    console.log("current index is at:", currentIndex);
  };

  return (
    <>
      <div className="w-auto h-80 p-8">
        <Map></Map>
      </div>
      <div className="relative w-full max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {visibleClinics.map((clinic) => (
            <div
              key={clinic.id}
              className="rounded-lg overflow-hidden bg-white shadow-md p-4"
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

export default Carousel;
