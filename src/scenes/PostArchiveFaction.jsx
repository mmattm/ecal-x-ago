/* eslint-disable react/prop-types */
import Scene from "../Scene";
import CustomDirectionalLight from "../CustomDirectionalLight";
import { Environment } from "@react-three/drei";

import LongSerpent from "../lights/Quilt/Long_serpent";
import AgoOff from "../lights/Quilt/AGO_off";
import { PI } from "three/examples/jsm/nodes/Nodes.js";

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
      <Environment preset="warehouse" environmentIntensity={0.6} />
      <ambientLight intensity={1} />

      <group position={[0, 0, 0]}>
        <CustomDirectionalLight position={[1, 20, 5]} intensity={4} />
        <CustomDirectionalLight position={[2, 10, -3]} intensity={2} />

        <LongSerpent
          position={[1.5, 1, 5.5]}
          scale={0.9}
          rotation={[0, 6.3, 0]}
        />
        <AgoOff
          position={[-0.45, 2, -1.2]}
          scale={0.9}
          rotation={[0, Math.PI * 1, 0]}
        />
      </group>
    </>
  );
}
