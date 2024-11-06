/* eslint-disable react/prop-types */
import { Sphere } from "@react-three/drei";
import FakeGlowMaterial from "../../FakeGlowMaterial";
import { Model } from "./MAEL_ALEXANDRE_FINAL.jsx";
import EnhancedSpotlight from "../../EnhancedSpotlight";

export default function Light({ position, scale, rotation }) {
  return (
    <>
      <group position={position} scale={scale} rotation={rotation}>
        {/* Put lights here */}
        <group position={[0.05, 0.86, 0.23]}>
          <EnhancedSpotlight
            position={[0, 1, 0]}
            castShadow={false}
            scale={0.8}
            attenuation={3}
            distance={30}
            opacity={0.3}
            angle={3}
          />
        </group>
        <group position={[0.49, 0.86, 0.23]}>
          <EnhancedSpotlight
            position={[0, 1, 0]}
            castShadow={false}
            scale={0.8}
            attenuation={3}
            distance={30}
            opacity={0.3}
            angle={3}
          />
        </group>
        <group position={[-0.4, 0.86, 0.23]}>
          <EnhancedSpotlight
            position={[0, 1, 0]}
            castShadow={false}
            scale={0.8}
            attenuation={3}
            distance={30}
            opacity={0.3}
            angle={3}
          />
        </group>
        <Model position={[0, 0, 0]} />
      </group>
    </>
  );
}
