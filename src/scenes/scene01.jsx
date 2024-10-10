/* eslint-disable react/prop-types */
import { SoftShadows, Sky, Environment, Sphere } from "@react-three/drei";
import EnhancedSpotlight from "../EnhancedSpotlight";
import FakeGlowMaterial from "../FakeGlowMaterial";
import Scene from "../Scene";
import CustomDirectionalLight from "../CustomDirectionalLight"; // Import the new component
import GltfLoader from "../GltfLoader";

const light01 = "../models/ORIANA_FLAVIA_03.gltf";

export default function Scene01() {
  return (
    <>
      <Scene splatPosition={[0, 0, 0]} />

      <group position={[0, 0, 0]}>
        <CustomDirectionalLight position={[1, 20, 5]} intensity={3} />
        <CustomDirectionalLight position={[2, 10, -3]} intensity={1} />

        <EnhancedSpotlight
          position={[1, 1, 0]}
          castShadow={false}
          attenuation={2}
          distance={4}
          angle={0.1}
        />

        <Sphere
          args={[0.4, 32, 32]}
          position={[-0.0, 0.95, 0.01]}
          renderOrder={1}
        >
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

        <GltfLoader modelPath={light01} position={[0, 0, 0]} scale={0.5} />
      </group>
    </>
  );
}
