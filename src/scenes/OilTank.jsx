/* eslint-disable react/prop-types */
import { useEffect } from "react";
import Scene from "../Scene";
import CustomDirectionalLight from "../CustomDirectionalLight"; // Import the new component
import { Environment, SoftShadows } from "@react-three/drei";

import Yellow from "../lights/Upper/UPPER_YELLOW02";
import Green from "../lights/Upper/Green";
import Blue from "../lights/Upper/Blue";

import LightWrapper from "../lights/LightWrapper"; // Import the LightWrapper component

import { lightStore } from "../store";

const splat = "/splats/OilTank_compressed.ksplat";

export default function SceneContainer() {
  const { lights, addLights, resetLights } = lightStore();

  useEffect(() => {
    resetLights();

    addLights({
      upper_01: { Component: Yellow, position: [-0.8, 0, -0.7], scale: 0.5 },
      // upper_02: { Component: Green, position: [0.8, 0, 0], scale: 0.5 },
      // upper_03: { Component: Blue, position: [-0.4, 0, 0.7], scale: 0.5 },
      upper_04: { Component: Yellow, position: [1.6, 0, 0.95], scale: 0.5 },
    });
  }, [addLights, resetLights]);

  return (
    <>
      <Scene
        splat={splat}
        splatPosition={[0.5, -0.29, -1]}
        splatRotation={[-Math.PI + 0.1, -Math.PI / 2, 0]}
        splatScale={5}
      />
      <SoftShadows size={13} samples={16} focus={1} />

      <Environment preset="warehouse" environmentIntensity={0.9} />
      {/* <ambientLight intensity={0.2} /> */}

      <CustomDirectionalLight position={[2, 10, 5]} intensity={1} />
      <CustomDirectionalLight position={[2, 10, -3]} intensity={1} />

      {Object.entries(lights).map(([id, { Component, position, scale }]) => (
        <LightWrapper
          key={id}
          id={id}
          Component={Component}
          position={position}
          scale={scale}
        />
      ))}
    </>
  );
}
