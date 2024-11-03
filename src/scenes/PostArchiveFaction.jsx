/* eslint-disable react/prop-types */
import { useEffect } from "react";
import Scene from "../Scene";
import CustomDirectionalLight from "../CustomDirectionalLight";
import { Environment } from "@react-three/drei";

import LongSerpent from "../lights/Quilt/BOLASSI_SERPENT_FINAL";
import VerticalSerpent from "../lights/Quilt/BOLASSI_VERTICAL_FINAL";

import LightWrapper from "../lights/LightWrapper"; // Import the LightWrapper component
import { lightStore } from "../store"; // Import the lightStore

const splat = "/splats/PostArchiveFaction_compressed.ksplat";

export default function SceneContainer() {
  const { lights, addLights, resetLights } = lightStore();

  useEffect(() => {
    resetLights();

    addLights({
      long_serpent: {
        Component: LongSerpent,
        position: [0.4, 1, 4.25],
        scale: 1,
        rotation: [0, 6.3, 0],
      },
      vertical_serpent: {
        Component: VerticalSerpent,
        position: [-0.83, -0.3, -0.2],
        scale: 1,
        rotation: [0, Math.PI * 1, 0],
      },
    });
  }, [addLights, resetLights]);

  return (
    <>
      <Scene
        splat={splat}
        splatPosition={[0.5, -3.35, 0]}
        splatScale={4}
        splatRotation={[3.15, -0.06, 0.03]}
      />
      <Environment preset="warehouse" environmentIntensity={0.7} />

      <CustomDirectionalLight position={[2, 20, 5]} intensity={4} />
      <CustomDirectionalLight position={[2, 10, -3]} intensity={2} />

      {Object.entries(lights).map(
        ([id, { Component, position, scale, rotation }]) => (
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
    </>
  );
}
