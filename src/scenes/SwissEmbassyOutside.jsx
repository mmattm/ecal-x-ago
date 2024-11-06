/* eslint-disable react/prop-types */
import { useEffect } from "react";
import Scene from "../Scene";
import CustomDirectionalLight from "../CustomDirectionalLight";

import Pole from "../lights/Pole/Pole";
import { Environment, SoftShadows } from "@react-three/drei";

import LightWrapper from "../lights/LightWrapper"; // Import the LightWrapper component
import { lightStore } from "../store";

const splat = "/splats/SwissEmbassyOutside_compressed.ksplat";

export default function SceneContainer() {
  const { lights, addLights, resetLights } = lightStore();

  useEffect(() => {
    resetLights();

    addLights({
      pole_01: {
        Component: Pole,
        position: [2.2, 0, 4],
        scale: 0.42,
        distance: [1.25, 1.25, 1.25],
        origin: [0.5, 0.5, -0.5],
        rotation: [0, 6.6, 0],
      },
      pole_02: {
        Component: Pole,
        position: [-0.1, 0, 1.8],
        scale: 0.42,
        distance: [1.25, 1.25, 1.25],
        origin: [-0, 0.5, 1],
        rotation: [0, 4.4, 0],
      },
      pole_03: {
        Component: Pole,
        position: [2.6, 0, 0.8],
        scale: 0.42,
        distance: [1.25, 1.25, 1.25],
        origin: [-0.5, 0.5, 0],
        rotation: [0, 2.35, 0],
      },
    });
  }, [addLights, resetLights]);

  return (
    <>
      <Scene
        splat={splat}
        splatPosition={[1, -0.21, 2]}
        splatRotation={[3.161, 1.97, -0.015]}
        splatScale={3}
      />

      <Environment preset="city" environmentIntensity={1} />
      <SoftShadows size={8} samples={16} focus={1} />

      <ambientLight intensity={1} />

      <CustomDirectionalLight position={[1, 10, 5]} intensity={3} />
      <CustomDirectionalLight position={[2, 10, -3]} intensity={3} />

      {Object.entries(lights).map(
        ([id, { Component, position, rotation, scale }]) => (
          <LightWrapper
            key={id}
            id={id}
            Component={Component}
            position={position}
            scale={scale}
            rotation={rotation}
          />
        )
      )}
      {/* <LightWrapper
        id="pole-1"
        Component={Pole}
        position={[2.2, 0, 4]}
        scale={0.42}
        rotation={[0, 6.6, 0]}
      /> */}
      {/* <LightWrapper
        id="pole-2"
        Component={Pole}
        position={[-0.1, 0, 1.8]}
        scale={0.42}
        rotation={[0, 4.4, 0]}
      />
      <LightWrapper
        id="pole-3"
        Component={Pole}
        position={[2.6, 0, 0.8]}
        scale={0.42}
        rotation={[0, 2.35, 0]}
      /> */}
    </>
  );
}
