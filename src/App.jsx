/* eslint-disable react/prop-types */
import "./App.css";

import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { useControls, button } from "leva";
import { useSceneControls } from "./controls"; // Import the controls

import Scene01 from "./scenes/scene01";

export default function App() {
  return (
    <>
      {/* <Canvas shadows camera={{ position: [5, 2, 0], fov: fov }}> */}
      <Canvas shadows>
        <Stage />
      </Canvas>
    </>
  );
}

function Stage() {
  useSceneControls();

  return (
    <>
      <Scene01 />
    </>
  );
}
