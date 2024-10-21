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

        <Pole position={[0, 0, 0]} scale={0.5} rotation={[0, 0, 0]} />

        <EnhancedSpotlight
          position={[2, 1, -2]}
          castShadow={false}
          attenuation={6}
          distance={5}
          angle={0.1}
          targetPosition={[1, 2, 0]}
        />
      </group>
    </>
  );
}
