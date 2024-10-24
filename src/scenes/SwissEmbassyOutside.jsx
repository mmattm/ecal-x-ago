/* eslint-disable react/prop-types */
import Scene from "../Scene";
import CustomDirectionalLight from "../CustomDirectionalLight";

import Pole from "../lights/Pole/Pole";
import { Environment, SoftShadows } from "@react-three/drei";

const splat = "/splats/SwissEmbacyAll.splat";

export default function SceneContainer() {
  return (
    <>
      <Scene
        splat={splat}
        splatPosition={[1, -0.21, 2]}
        splatRotation={[3.161, 1.97, -0.015]}
        splatScale={3}
      />

      <Environment preset="city" environmentIntensity={2} />
      <SoftShadows size={8} samples={16} focus={1} />

      {/* <ambientLight intensity={1} /> */}

      <group position={[0, 0, 0]}>
        <CustomDirectionalLight position={[1, 10, 5]} intensity={3} />
        <CustomDirectionalLight position={[2, 10, -3]} intensity={3} />

        <Pole position={[2.2, 0, 4]} scale={0.42} rotation={[0, 6.6, 0]} />
        <Pole position={[-0.1, 0, 1.8]} scale={0.42} rotation={[0, 4.4, 0]} />
        <Pole position={[2.6, 0, 0.8]} scale={0.42} rotation={[0, 2.35, 0]} />
        {/* <Pole position={[2, 0, 2]} scale={0.35} rotation={[0, -3, 0]} /> */}
      </group>
    </>
  );
}
