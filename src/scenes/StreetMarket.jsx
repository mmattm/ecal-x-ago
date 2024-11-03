/* eslint-disable react/prop-types */
import Scene from "../Scene";
import CustomDirectionalLight from "../CustomDirectionalLight";
import { Environment, SoftShadows } from "@react-three/drei";

const splat = "/splats/StreetMarket.splat";

export default function SceneContainer() {
  return (
    <>
      <Scene
        splat={splat}
        splatRotation={[0, 0, 3.15]}
        splatPosition={[0, 0, 0]}
      />

      <Environment preset="apartment" />
      <ambientLight intensity={1} />
      <SoftShadows size={20} samples={16} focus={2} />

      <group position={[0, 0, 0]}>
      </group>
    </>
  );
}