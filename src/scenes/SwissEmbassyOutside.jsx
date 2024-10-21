/* eslint-disable react/prop-types */
import Scene from "../Scene";
import CustomDirectionalLight from "../CustomDirectionalLight";

import Pole from "../lights/Pole/Pole";
import EnhancedSpotlight from "../EnhancedSpotlight";

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

        <Pole position={[3, 0, -0.2]} scale={0.35} rotation={[0, 1.5, 0]} />
        <Pole position={[1, 0, -0.8]} scale={0.35} rotation={[0, 3.5, 0]} />
        {/* <Pole position={[2, 0, 2]} scale={0.35} rotation={[0, -3, 0]} /> */}
      </group>
    </>
  );
}
