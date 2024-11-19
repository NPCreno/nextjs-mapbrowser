import React, { useContext } from "react";
import ComponentD from "./ComponentD";
import { UserContext } from "./ComponentA";

export default function ComponentC() {
  const user = useContext(UserContext);
  return (
    <div className="box">
      <h1>Component C</h1>
      <h2>{`${user}`}</h2>
      <ComponentD></ComponentD>
    </div>
  );
}
