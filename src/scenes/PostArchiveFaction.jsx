/* eslint-disable react/prop-types */
import { useEffect } from "react";
import Scene from "../Scene";
import CustomDirectionalLight from "../CustomDirectionalLight";
import { Environment } from "@react-three/drei";

// import LongSerpent from "../lights/Quilt/BOLASSI_SERPENT_FINAL";
// import VerticalSerpent from "../lights/Quilt/BOLASSI_VERTICAL_FINAL";
import QUILT_01 from "../lights/Quilt/QUILT_01";
import QUILT_02 from "../lights/Quilt/QUILT_02";

import { lightStore } from "../store"; // Import the lightStore

const splat = "/splats/PostArchiveFaction_compressed.ksplat";
const splatMobile = "/splats/PostArchiveFaction_compressed_mobile.ksplat";

export default function SceneContainer() {
  const { lights, addLights, resetLights } = lightStore();

  useEffect(() => {
    resetLights();

    addLights({
      long_serpent: {
        Component: QUILT_02,
        position: [0.4, 1, 4.25],
        scale: 1,
        rotation: [0, 6.3, 0],
        distance: [1.1, 0.6, 1.1],
        origin: [0, 1.1, -0.8],
        fov: 1.3,
      },
      vertical_serpent: {
        Component: QUILT_01,
        position: [-0.83, -0.45, -0.2],
        scale: 1,
        rotation: [0, Math.PI * 1, 0],
        distance: [1.3, 3.3, 1.7],
        origin: [1.2, 2.2, -0.2],
        fov: 1.1,
      },
    });
  }, [addLights, resetLights]);

  return (
    <>
      <Scene
        splat={splat}
        splatMobile={splatMobile}
        lights={lights}
        splatPosition={[0.5, -3.35, 0]}
        splatScale={4}
        splatRotation={[3.15, -0.06, 0.03]}
      />
      <Environment preset="warehouse" environmentIntensity={0.7} />

      <CustomDirectionalLight position={[2, 20, 5]} intensity={4} />
      <CustomDirectionalLight position={[2, 10, -3]} intensity={2} />
    </>
  );
}
