/* eslint-disable react/prop-types */
import { useEffect } from "react";
import Scene from "../Scene";
import CustomDirectionalLight from "../CustomDirectionalLight"; // Import the new component
import { Environment, SoftShadows } from "@react-three/drei";

import UPPER_YELLOW from "../lights/Upper/UPPER_YELLOW";
import UPPER_GREEN from "../lights/Upper/UPPER_GREEN";
import UPPER_BLUE from "../lights/Upper/UPPER_BLUE";

import LightWrapper from "../lights/LightWrapper"; // Import the LightWrapper component

import { lightStore } from "../store";

const splat = "/splats/OilTank.splat";

export default function SceneContainer() {
  const { lights, addLights, resetLights } = lightStore();

  useEffect(() => {
    resetLights();

    addLights({
      upper_01: {
        Component: UPPER_YELLOW,
        position: [-0.8, 0, -0.7],
        scale: 0.5,
        distance: [1.25, 1.25, 1.25],
        origin: [0, 0.5, 0],
        fov: 5,
      },
      upper_02: {
        Component: UPPER_GREEN,
        position: [0.8, 0, 0],
        scale: 0.5,
        distance: [1.25, 1.25, 1.25],
        origin: [0, 0.5, 0],
        fov: 2,
      },
      upper_03: {
        Component: UPPER_BLUE,
        position: [-0.4, 0, 0.7],
        scale: 0.5,
        distance: [1.25, 1.25, 1.25],
        origin: [0, 0.5, 0],
        fov: 2,
      },
      upper_04: {
        Component: UPPER_YELLOW,
        position: [1.6, 0, 0.95],
        scale: 0.5,
        distance: [1.25, 1.25, 1.25],
        origin: [0, 0.5, 0],
        fov: 2,
      },
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
