/* eslint-disable react/prop-types */
import Scene from "../Scene";
import CustomDirectionalLight from "../CustomDirectionalLight";

import Pole from "../lights/Pole/Pole";

const splat = "/splats/SwissEmbacyAll.splat";

export default function SceneContainer() {
  return (
    <>
      <Scene
        splat={splat}
        splatPosition={[1, -0.185, 2]}
        splatRotation={[3.14, 1.97, -0.013]}
        splatScale={3}
      />

      <group position={[0, 0, 0]}>
        <CustomDirectionalLight position={[1, 20, 5]} intensity={3} />
        <CustomDirectionalLight position={[2, 10, -3]} intensity={1} />

        <Pole position={[0, 0, 0]} scale={0.5} rotation={[0, 0, 0]} />
      </group>
    </>
  );
}
