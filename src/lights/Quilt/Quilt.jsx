/* eslint-disable react/prop-types */
import { Sphere } from "@react-three/drei";
import FakeGlowMaterial from "../../FakeGlowMaterial";
import { Model } from "./Long_serpent.jsx";

export default function Light({ position, scale, rotation }) {
  return (
    <>
      <group position={position} scale={scale}>
        {/* Put lights here */}
        <Model position={[1, 0, 1]} />
      </group>
    </>
  );
}
