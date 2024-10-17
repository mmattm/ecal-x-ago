/* eslint-disable react/prop-types */
import { Sphere } from "@react-three/drei";
import FakeGlowMaterial from "../../FakeGlowMaterial";
import { Model } from "./JOAB_CHARLOTTE.jsx";

export default function Light({ position, scale, rotation }) {
  return (
    <>
      <group position={position} scale={scale}>
        {/* Put lights here */}

        <Model position={[0, 0, 0]} />
      </group>
    </>
  );
}
