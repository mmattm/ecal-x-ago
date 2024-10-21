/* eslint-disable react/prop-types */
import { Sphere } from "@react-three/drei";
import FakeGlowMaterial from "../../FakeGlowMaterial";
import { Model as Plant1 } from "./JOAB_CHARLOTTE.jsx";
import { Model as Plant2 } from "./JOAB_CHARLOTTE_02.jsx";
import EnhancedSpotlight from "../../EnhancedSpotlight";

export default function Light({ position, scale, rotation }) {
  return (
    <>
      <group position={position} scale={scale}>
        <Plant1 position={[0, 0, 0]} />
        <Plant2 position={[50, 0, 20]} />
      </group>
    </>
  );
}
