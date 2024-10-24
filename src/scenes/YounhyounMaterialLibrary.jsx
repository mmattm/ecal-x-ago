/* eslint-disable react/prop-types */
import Scene from "../Scene";
import CustomDirectionalLight from "../CustomDirectionalLight";
import { Environment, SoftShadows } from "@react-three/drei";

import Frame from "../lights/Frame/Frame";

const splat = "/splats/MaterialLibraryAll.splat";

const offsetX = 1;
const offsetY = 1;

export default function SceneContainer() {
  return (
    <>
      <Scene
        splat={splat}
        splatRotation={[3.32, 0.9, -0.122]}
        splatPosition={[2, 2.6, 0]}
      />

      <Environment preset="apartment" />
      <ambientLight intensity={2} />
      <SoftShadows size={16} samples={16} focus={2} />

      <group position={[0, 0, 0]}>
        <CustomDirectionalLight position={[10, 14, 2]} intensity={3} />
        <CustomDirectionalLight position={[10, 8, 5]} intensity={1} />

        {/* <CustomDirectionalLight position={[2, 13, -3]} intensity={1} /> */}

        <Frame position={[-6.5, 0, 5]} scale={1.9} rotation={[0, 2.25, 0]} />
      </group>
    </>
  );
}
