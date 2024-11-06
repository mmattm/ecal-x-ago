/* eslint-disable react/prop-types */
import { useEffect } from "react";

import Scene from "../Scene";
import CustomDirectionalLight from "../CustomDirectionalLight";
import { Environment, SoftShadows } from "@react-three/drei";

import { Model as Planta01 } from "../lights/Planta/PLANTA_01.jsx";
import { Model as Planta02 } from "../lights/Planta/PLANTA_02.jsx";
import { Model as Planta03 } from "../lights/Planta/PLANTA_03.jsx";

import { lightStore } from "../store";

// import { Model as Planta02 } from "../lights/Planta/PLANTA_02.jsx";
// import { Model as Planta2 } from "../lights/Planta/JOAB_CHARLOTTE_FINAL02.jsx";
// import { Model as Planta3 } from "../lights/Planta/JOAB_CHARLOTTE_FINAL03.jsx";
// import { Model as Planta4 } from "../lights/Planta/JOAB_CHARLOTTE_FINAL04.jsx";

const splat = "/splats/SimulgwanPHbotanicalGarden_compressed.ksplat";
const splatMobile =
  "/splats/SimulgwanPHbotanicalGarden_compressed_mobile.ksplat";

export default function SceneContainer() {
  const { lights, addLights, resetLights } = lightStore();

  useEffect(() => {
    resetLights();

    addLights({
      planta_01: {
        Component: Planta03,
        position: [-0.4, 0, -0.8],
        scale: 0.15,
        distance: [0.8, 1.8, 0.8],
        origin: [-0.5, 0.8, 1.3],
        fov: 1.7,
      },
      planta_03: {
        Component: Planta01,
        position: [-1.1, 0, 1.9],
        scale: 0.15,
        distance: [0.6, 0.4, 0.6],
        rotation: [0, 2, 0],
        origin: [1.4, 0.7, 0],
        fov: 1.1,
      },
      planta_04: {
        Component: Planta02,
        position: [2.5, 0, 0.8],
        scale: 0.15,
        distance: [0.015, 1.1, 0.015],
        rotation: [0, 4.3, 0],
        origin: [-0.9, 0.73, -1],
        fov: 1.4,
      },
    });
  }, [addLights, resetLights]);

  return (
    <>
      <Scene
        splat={splat}
        splatMobile={splatMobile}
        lights={lights}
        splatPosition={[1, -1.36, -11]}
        splatScale={4}
        splatRotation={[3.205, 0, 0.009]}
      />

      <Environment preset="forest" environmentIntensity={1} />
      <ambientLight intensity={0.3} />
      <SoftShadows size={20} samples={18} focus={1} />

      <CustomDirectionalLight position={[1, 30, 5]} intensity={1} />
      <CustomDirectionalLight position={[2, 30, -3]} intensity={1} />

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
