/* eslint-disable react/prop-types */
import { Sphere } from "@react-three/drei";
import FakeGlowMaterial from "../../FakeGlowMaterial";
import { Model } from "./ORIANA_FLAVIA_03.jsx";
import EnhancedSpotlight from "../../EnhancedSpotlight";

export default function MozziBar({ position, scale }) {
  return (
    <>
      <group position={position} scale={scale}>
        <Sphere args={[0.4, 32, 32]} position={[0, 1.9, 0.01]} renderOrder={1}>
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

        {/* <EnhancedSpotlight
          position={[1, 1, 0]}
          castShadow={false}
          attenuation={2}
          distance={4}
          angle={0.1}
        /> */}

        <Model position={[0, 0, 0]} />
      </group>
    </>
  );
}
