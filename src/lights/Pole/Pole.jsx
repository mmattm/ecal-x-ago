/* eslint-disable react/prop-types */
import { Sphere } from "@react-three/drei";
import FakeGlowMaterial from "../../FakeGlowMaterial";
import { Model } from "./nikita_matthieu.jsx";
import EnhancedSpotlight from "../../EnhancedSpotlight";

export default function Light({ position, scale, rotation }) {
  return (
    <>
      <group position={position} scale={scale} rotation={rotation}>
        {/* Put lights here */}
        <group position={[4.03, 1.18, -1.81]}>
          <EnhancedSpotlight
            position={[0, 1, 0]}
            castShadow={false}
            scale={0.5}
            attenuation={1}
            distance={5}
            opacity={0.6}
            // angle={0.2}
          />
        </group>
        <group position={[3.61, 1.18, -2.55]}>
          <EnhancedSpotlight
            position={[0, 1, 0]}
            castShadow={false}
            scale={0.5}
            attenuation={1}
            distance={5}
            opacity={0.6}
            // angle={0.2}
          />
        </group>

        <Sphere args={[1.5, 32, 32]} position={[0.05, 2.2, 0]} renderOrder={1}>
          <FakeGlowMaterial
            falloff={4.5}
            glowInternalRadius={7}
            glowColor={"#fff"}
            glowSharpness={1}
            // toneMapped={true}
            depthTest={false}
          />
        </Sphere>

        {/* <EnhancedSpotlight
          position={[1, 1, 0]}
          castShadow={true}
          attenuation={2}
          distance={4}
          angle={0.5}
        /> */}

        <Model position={[0, 0, 0]} />
      </group>
    </>
  );
}
