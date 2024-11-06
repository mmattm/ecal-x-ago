/* eslint-disable react/prop-types */
import Scene from "../Scene";
import { Environment, SoftShadows } from "@react-three/drei";

const splat = "/splats/StreetSeoul.ksplat";
const splatMobile = "/splats/StreetSeoul_mobile.ksplat";

export default function SceneContainer() {
  return (
    <>
      <Scene
        splat={splat}
        splatMobile={splatMobile}
        splatRotation={[0, 0, 3.15]}
        splatPosition={[0, 0, 0]}
      />

      <Environment preset="apartment" />
      <ambientLight intensity={1} />
      <SoftShadows size={20} samples={16} focus={2} />

      <group position={[0, 0, 0]}></group>
    </>
  );
}
