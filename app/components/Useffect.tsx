"use client";
import React, { useEffect, useState } from "react";

export default function Useffect() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");
  useEffect(() => {
    document.title = `Count: ${count} ${color}`;
  }, [count]);

  function addCount() {
    setCount((c) => c + 1);
  }

  function subtractCount() {
    setCount((c) => c - 1);
  }

  function changeColor() {
    setColor((c) => (c === "green" ? "red" : "green"));
  }

  return (
    <>
      <div className="w-full flex justify-center items-center flex-col">
        USE EFFECT AREA
        <p style={{ color: color }}>Count: {count} </p>
        <button
          className="bg-blue-400 h-auto rounded w-auto p-4 rounded "
          onClick={addCount}
        >
          Add
        </button>
        <br />
        <button
          className="bg-blue-400 h-auto rounded w-auto p-4"
          onClick={subtractCount}
        >
          Subtract
        </button>
        <br />
        <button
          className="bg-blue-400 h-auto rounded w-auto p-4 rounded"
          onClick={changeColor}
        >
          Change Color
        </button>
      </div>
    </>
  );
}
