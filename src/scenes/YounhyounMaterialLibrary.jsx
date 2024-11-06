/* eslint-disable react/prop-types */
import { useEffect } from "react";

import Scene from "../Scene";
import CustomDirectionalLight from "../CustomDirectionalLight";
import { Environment, SoftShadows } from "@react-three/drei";

import LightWrapper from "../lights/LightWrapper"; // Import the LightWrapper component
import { lightStore } from "../store";

import FRAME_SOFA from "../lights/Frame/FRAME_SOFA";
import FRAME_CHAIR from "../lights/Frame/FRAME_CHAIR";

// import FrameBackup from "../lights/Frame/Frame_backup";
// import Frame2 from "../lights/Frame/ALEX_LI";

const splat = "/splats/YounhyounMaterialLibrary_compressed.ksplat";

export default function SceneContainer() {
  const { lights, addLights, resetLights } = lightStore();

  useEffect(() => {
    resetLights();

    addLights({
      frame_sofa: {
        Component: FRAME_SOFA,
        position: [-6.5, 0, 5.1],
        scale: 1.8,
        distance: [4.7, 1.8, 4.7],
        origin: [0, 1.7, 0],
        rotation: [0, 2.25, 0],
        fov: 1.8,
      },
      frame_chair: {
        Component: FRAME_CHAIR,
        position: [-1, 0, 8.7],
        scale: 1.8,
        distance: [1.7, 2.8, 1.7],
        origin: [0, 3.2, -0],
        rotation: [0, 2.25 + Math.PI / 2, 0],
        fov: 1,
      },
    });
  }, [addLights, resetLights]);

  return (
    <>
      <Scene
        splat={splat}
        splatRotation={[3.32, 0.9, -0.122]}
        splatPosition={[2, 2.6, 0]}
      />

      <Environment preset="apartment" />
      <ambientLight intensity={1} />
      <SoftShadows size={20} samples={16} focus={2} />

      <CustomDirectionalLight position={[1, 18, 2]} intensity={3} />
      <CustomDirectionalLight position={[2, 20, 2]} intensity={1} />

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

      {/* <CustomDirectionalLight position={[2, 13, -3]} intensity={1} /> */}

      {/* <LightWrapper
        id="frame-1"
        Component={FrameBackup}
        position={[-6.5, 0, 5.1]}
        scale={1.8}
        rotation={[0, 2.25, 0]}
      /> */}

      {/* <LightWrapper
        id="frame-1"
        Component={Frame}
        position={[-6.5, 0, 5.1]}
        scale={1.8}
        rotation={[0, 2.25, 0]}
      />
      <LightWrapper
        id="frame-2"
        Component={Frame2}
        position={[-1, 0, 8.7]}
        scale={1.8}
        rotation={[0, 2.25 + Math.PI / 2, 0]}
      /> */}
    </>
  );
}
