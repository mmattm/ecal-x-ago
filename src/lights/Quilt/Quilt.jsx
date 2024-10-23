/* eslint-disable react/prop-types */
import { Sphere } from "@react-three/drei";
import FakeGlowMaterial from "../../FakeGlowMaterial";
import { Model } from "./Long_serpent.jsx";

export default function Light({ position, scale, rotation }) {
  return (
    <>
      <group position={position} scale={scale} rotation={rotation}>
        {/* Put lights here */}
        <Sphere args={[0.3, 32, 32]} position={[0, 1.13, -1.6]} renderOrder={1}>
          <FakeGlowMaterial
            falloff={4}
            glowInternalRadius={1}
            glowColor={"#fff"}
            glowSharpness={1}
            opacity={1}
            depthTest={false}
          />
        </Sphere>

        <Model position={[1, 0, 1]} />
      </group>
    </>
  );
}
