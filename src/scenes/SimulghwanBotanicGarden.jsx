/* eslint-disable react/prop-types */
import { useEffect } from "react";

import Scene from "../Scene";
import CustomDirectionalLight from "../CustomDirectionalLight";
import { Environment, SoftShadows } from "@react-three/drei";

import LightWrapper from "../lights/LightWrapper"; // Import the LightWrapper component

import { Model as Planta01 } from "../lights/Planta/PLANTA_01.jsx";
import { Model as Planta02 } from "../lights/Planta/PLANTA_02.jsx";
import { Model as Planta03 } from "../lights/Planta/PLANTA_03.jsx";

import { lightStore } from "../store";

// import { Model as Planta02 } from "../lights/Planta/PLANTA_02.jsx";
// import { Model as Planta2 } from "../lights/Planta/JOAB_CHARLOTTE_FINAL02.jsx";
// import { Model as Planta3 } from "../lights/Planta/JOAB_CHARLOTTE_FINAL03.jsx";
// import { Model as Planta4 } from "../lights/Planta/JOAB_CHARLOTTE_FINAL04.jsx";

const splat = "/splats/SimulgwanPHbotanicalGarden_compressed.ksplat";

export default function SceneContainer() {
  const { lights, addLights, resetLights } = lightStore();

  useEffect(() => {
    resetLights();

    addLights({
      planta_01: {
        Component: Planta02,
        position: [-0.4, 0, -0.8],
        scale: 0.15,
        distance: [1, 1.5, 1],
        origin: [-0.4, 0.5, 1.4],
      },
      planta_03: {
        Component: Planta01,
        position: [-1.1, 0, 1.9],
        scale: 0.15,
        distance: [1, 1.5, 1],
        rotation: [0, 2, 0],
        origin: [1.4, 0.5, -0.3],
      },
      planta_04: {
        Component: Planta02,
        position: [2.5, 0, 0.8],
        scale: 0.15,
        distance: [1, 1.5, 1],
        rotation: [0, 4.3, 0],
        origin: [-1, 0.5, -0.6],
      },
    });
  }, [addLights, resetLights]);

  return (
    <>
      <Scene
        splat={splat}
        splatPosition={[1, -1.36, -11]}
        splatScale={4}
        splatRotation={[3.205, 0, 0.009]}
      />

      <Environment preset="forest" environmentIntensity={1} />
      <ambientLight intensity={0.3} />
      <SoftShadows size={20} samples={18} focus={1} />

      <CustomDirectionalLight position={[1, 30, 5]} intensity={1} />
      <CustomDirectionalLight position={[2, 30, -3]} intensity={1} />

      {Object.entries(lights).map(
        ([id, { Component, position, rotation, scale }]) => (
          <LightWrapper
            key={id}
            id={id}
            Component={Component}
            position={position}
            rotation={rotation}
            scale={scale}
          />
        )
      )}

      {/* <LightWrapper
        id="planta-1"
        Component={Planta02}
        position={[-0.4, 0, -0.8]}
        scale={0.15}
      />
      <LightWrapper
        id="planta-3"
        Component={Planta01}
        position={[-1.1, 0, 1.9]}
        scale={0.15}
        rotation={[0, 2, 0]}
      />
      <LightWrapper
        id="planta-4"
        Component={Planta03}
        position={[2.5, 0, 0.8]}
        scale={0.15}
        rotation={[0, 4.3, 0]}
      /> */}

      {/* <LightWrapper
        id="planta-1"
        Component={Planta4}
        position={[-0.6, 0, -0.25]}
        scale={0.03}
      />
      <LightWrapper
        id="planta-2"
        Component={Planta2}
        position={[-0.5, 0, 1.9]}
        scale={0.03}
        rotation={[0, 2, 0]}
      />
      <LightWrapper
        id="planta-3"
        Component={Planta3}
        position={[2.05, 0, 0.45]}
        scale={0.03}
        rotation={[0, 4.3, 0]}
      /> */}
    </>
  );
}
