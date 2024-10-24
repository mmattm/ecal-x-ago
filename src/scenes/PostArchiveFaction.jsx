/* eslint-disable react/prop-types */
import Scene from "../Scene";
import CustomDirectionalLight from "../CustomDirectionalLight";
import { Environment } from "@react-three/drei";

import LongSerpent from "../lights/Quilt/BOLASSI_SERPENT_FINAL";
import VerticalSerpent from "../lights/Quilt/BOLASSI_VERTICAL_FINAL";

const splat = "/splats/PostArchiveFactionV2.splat";

export default function SceneContainer() {
  return (
    <>
      <Scene
        splat={splat}
        splatPosition={[0.5, -3.35, 0]}
        splatScale={4}
        splatRotation={[3.15, -0.06, 0.03]}
      />
      <Environment preset="warehouse" environmentIntensity={0.7} />
      {/* <ambientLight intensity={4} /> */}

      <group position={[0, 0, 0]}>
        <CustomDirectionalLight position={[2, 20, 5]} intensity={4} />
        <CustomDirectionalLight position={[2, 10, -3]} intensity={2} />

        <LongSerpent
          position={[0.6, 1.3, 4.4]}
          scale={0.9}
          rotation={[0, 6.3, 0]}
        />
        <VerticalSerpent
          position={[-0.54, 0.7, -0.5]}
          scale={0.9}
          rotation={[0, Math.PI * 1, 0]}
        />
      </group>
    </>
  );
}
