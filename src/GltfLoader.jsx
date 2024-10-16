/* eslint-disable react/prop-types */
import React, { useRef, useEffect } from "react";
import { useGLTF, Gltf } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function GltfLoader({ modelPath, ...props }) {
  const groupRef = useRef();
  const gltf = useLoader(GLTFLoader, modelPath);

  const { nodes, materials } = useGLTF(modelPath);
  // const { scale } = props;

  return (
    <>
      <primitive object={gltf.scene} position={[0, 0, 0]} />
      <Gltf src={gltf.scene} position={[0, 6, 0]} scale={1} />
    </>
  );
}
