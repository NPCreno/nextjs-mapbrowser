"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function StateButtons() {
  const [selectedState, setSelectedState] = useState<number>(0);

  function changeState(index: number) {
    setSelectedState(index);
  }

  return (
    <div className="flex justify-center items-center flex-col space-y-4 mt-8">
      <h2 className="text-xl font-semibold text-gray-800">Select a State</h2>
      <div className="flex space-x-6">
        <Link href="/state/PA">
          <button
            className={`w-auto px-6 py-3 border rounded-lg text-white font-medium transition duration-300 ${
              selectedState === 0
                ? "bg-blue-600 hover:bg-blue-500"
                : "bg-blue-300 hover:bg-blue-400"
            }`}
            onClick={() => changeState(0)}
          >
            Virginia
          </button>
        </Link>

        <Link href="/state/VA">
          <button
            className={`w-auto px-6 py-3 border rounded-lg text-white font-medium transition duration-300 ${
              selectedState === 1
                ? "bg-blue-600 hover:bg-blue-500"
                : "bg-blue-300 hover:bg-blue-400"
            }`}
            onClick={() => changeState(1)}
          >
            Pennsylvania
          </button>
        </Link>
        <Link href="/state/WV">
          <button
            className={`w-auto px-6 py-3 border rounded-lg text-white font-medium transition duration-300 ${
              selectedState === 2
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
  );
}
