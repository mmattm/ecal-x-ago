/* eslint-disable react/prop-types */
import { SoftShadows, Sky, Environment, Sphere } from "@react-three/drei";
import EnhancedSpotlight from "../EnhancedSpotlight";
import FakeGlowMaterial from "../FakeGlowMaterial";
import Scene from "../Scene";
import CustomDirectionalLight from "../CustomDirectionalLight"; // Import the new component
import GltfLoader from "../GltfLoader";

const splat = "/splats/outdoor.splat";
const light01 = "../models/ORIANA_FLAVIA_03.gltf";

export default function Scene02() {
  return (
    <>
      <Scene splat={splat} splatPosition={[0, 0, 0]} />

      <group position={[0, 0, 0]}>
        <CustomDirectionalLight position={[1, 20, 5]} intensity={3} />
        <CustomDirectionalLight position={[2, 10, -3]} intensity={1} />
      </group>
    </>
  );
}
