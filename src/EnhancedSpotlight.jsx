/* eslint-disable react/prop-types */
import { SpotLight } from "@react-three/drei";
import { useRef, useEffect } from "react";

function EnhancedSpotlight({ position, distance = 3, angle = 0.35, ...props }) {
  const spotLightRef = useRef();

  useEffect(() => {
    if (spotLightRef.current && spotLightRef.current.children.length > 0) {
      const coneMesh = spotLightRef.current.children[0];
      coneMesh.renderOrder = 1; // Match this with your Sphere's renderOrder

      // Optionally adjust depth properties to prevent rendering issues
      if (coneMesh.material) {
        coneMesh.material.depthTest = false;
        coneMesh.material.depthWrite = false;
      }
    }
  }, []);

  return (
    <SpotLight
      ref={spotLightRef}
      distance={distance}
      angle={angle}
      position={position}
      {...props}
    />
  );
}

export default EnhancedSpotlight;
