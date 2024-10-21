/* eslint-disable react/prop-types */
import { SpotLight } from "@react-three/drei";
import { useRef, useEffect } from "react";
import * as THREE from "three";

function EnhancedSpotlight({
  position,
  distance = 3,
  angle = 0.35,
  targetPosition = [0, 0, 0],
  ...props
}) {
  const spotLightRef = useRef();
  const targetRef = useRef(new THREE.Object3D());

  useEffect(() => {
    if (spotLightRef.current) {
      // Set the spotlight target to the target object
      spotLightRef.current.target = targetRef.current;

      // Update the target position
      targetRef.current.position.set(...targetPosition);

      // Optionally update the render order and depth properties of the cone mesh
      if (spotLightRef.current.children.length > 0) {
        const coneMesh = spotLightRef.current.children[0];
        coneMesh.renderOrder = 1; // Match this with your Sphere's renderOrder

        if (coneMesh.material) {
          coneMesh.material.depthTest = false;
          coneMesh.material.depthWrite = false;
        }
      }
    }
  }, [targetPosition]);

  return (
    <>
      <SpotLight
        ref={spotLightRef}
        distance={distance}
        angle={angle}
        position={position}
        {...props}
      />
      {/* The target object needs to be part of the scene */}
      <primitive ref={targetRef} object={targetRef.current} />
    </>
  );
}

export default EnhancedSpotlight;
