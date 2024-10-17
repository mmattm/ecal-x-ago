/* eslint-disable react/prop-types */
import { Sphere } from "@react-three/drei";
import FakeGlowMaterial from "../../FakeGlowMaterial";
import { Model } from "./nikita_matthieu.jsx";
import EnhancedSpotlight from "../../EnhancedSpotlight";

export default function Light({ position, scale, rotation }) {
  return (
    <>
      <group position={position} scale={scale}>
        {/* Put lights here */}
        <Sphere args={[2, 32, 32]} position={[1, 1.9, 0.01]} renderOrder={1}>
          <FakeGlowMaterial
            falloff={4}
            glowInternalRadius={10}
            glowColor={"#fff"}
            // glowSharpness={1}
            opacity={0.5}
            toneMapped={true}
            depthTest={true}
          />
        </Sphere>

        <EnhancedSpotlight
          position={[1, 1, 0]}
          castShadow={true}
          attenuation={2}
          distance={4}
          angle={0.5}
        />

        <Model position={[0, 0, 0]} />
      </group>
    </>
  );
}
