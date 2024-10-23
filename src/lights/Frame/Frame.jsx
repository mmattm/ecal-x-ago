/* eslint-disable react/prop-types */
import { Sphere } from "@react-three/drei";
import FakeGlowMaterial from "../../FakeGlowMaterial";
import { Model } from "./MAEL_ALEXANDRE_05.jsx";

export default function Light({ position, scale, rotation }) {
  return (
    <>
      <group position={position} scale={scale} rotation={rotation}>
        {/* Put lights here */}

        <Model position={[0, 0, 0]} />
      </group>
    </>
  );
}
