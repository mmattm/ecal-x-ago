/* eslint-disable react/prop-types */
import Scene from "../Scene";
import CustomDirectionalLight from "../CustomDirectionalLight";
import { Environment, SoftShadows } from "@react-three/drei";

import Frame from "../lights/Frame/Frame";
import Frame2 from "../lights/Frame/ALEX_LI";

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
      <ambientLight intensity={1} />
      <SoftShadows size={20} samples={16} focus={2} />

      <group position={[0, 0, 0]}>
        <CustomDirectionalLight position={[1, 18, 2]} intensity={3} />
        <CustomDirectionalLight position={[2, 20, 2]} intensity={1} />

        {/* <CustomDirectionalLight position={[2, 13, -3]} intensity={1} /> */}

        <Frame position={[-6.5, 0, 5.1]} scale={1.8} rotation={[0, 2.25, 0]} />
        <Frame2
          position={[-1, 0, 8.7]}
          scale={1.8}
          rotation={[0, 2.25 + Math.PI / 2, 0]}
        />
      </group>
    </>
  );
}
