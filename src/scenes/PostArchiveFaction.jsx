/* eslint-disable react/prop-types */
import Scene from "../Scene";
import CustomDirectionalLight from "../CustomDirectionalLight";
import { Environment } from "@react-three/drei";

import Quilt from "../lights/Quilt/Quilt";

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
      <Environment preset="sunset" />
      <ambientLight intensity={1} />

      <group position={[0, 0, 0]}>
        <CustomDirectionalLight position={[1, 20, 5]} intensity={3} />
        <CustomDirectionalLight position={[2, 10, -3]} intensity={1} />

        <Quilt position={[0, 0.7, 0.6]} scale={1} rotation={[0, Math.PI, 0]} />
      </group>
    </>
  );
}
