/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function GltfLoader({ modelPath, position, scale }) {
  const gltf = useLoader(GLTFLoader, modelPath);

  // Traverse the GLTF model and enable shadows
  useEffect(() => {
    if (gltf) {
      gltf.scene.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true; // Enable casting shadows
          child.receiveShadow = true; // Enable receiving shadows (if needed)
        }
      });
    }
  }, [gltf]);

  return (
    <primitive
      object={gltf.scene}
      position={position}
      castShadow
      scale={scale}
    />
  );
}
