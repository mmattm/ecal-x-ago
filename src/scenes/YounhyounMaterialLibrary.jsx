/* eslint-disable react/prop-types */
import Scene from "../Scene";
import CustomDirectionalLight from "../CustomDirectionalLight";

import Frame from "../lights/Frame/Frame";

const splat = "/splats/MaterialLibraryAll.splat";

export default function SceneContainer() {
  return (
    <>
      <Scene
        splat={splat}
        splatRotation={[3.32, 0.9, -0.122]}
        splatPosition={[2, 1.65, 0]}
      />

      <group position={[0, 0, 0]}>
        <CustomDirectionalLight position={[1, 20, 5]} intensity={3} />
        <CustomDirectionalLight position={[2, 10, -3]} intensity={1} />

        <Frame position={[0, 0, 0]} scale={0.5} rotation={[0, 0, 0]} />
      </group>
    </>
  );
}
