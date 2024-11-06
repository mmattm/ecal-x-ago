/* eslint-disable react/prop-types */
import React, { useEffect, useState, useRef } from "react";
import { globalStore, lightStore } from "../store";
import { cameraPathsStore } from "../store";
import { animated, useSpring } from "@react-spring/web";

export default function LightWrapper({
  Component,
  position,
  scale,
  rotation,
  id,
  onClick,
}) {
  const setFocusMode = cameraPathsStore((state) => state.setFocusMode);
  const focusMode = cameraPathsStore((state) => state.focusMode);

  const gaussianVisible = globalStore((state) => state.gaussianVisible);

  const lights = lightStore((state) => state.lights);
  const setSelectedLightIndex = lightStore(
    (state) => state.setSelectedLightIndex
  );

  const selectedLightIndex = lightStore((state) => state.selectedLightIndex);
  const [isActive, setIsActive] = React.useState(false);
  const [dimmingValue, setDimmingValue] = useState(1);

  const animationComplete = cameraPathsStore(
    (state) => state.animationComplete
  );

  const { dimming } = useSpring({
    dimming: !isActive ? 0 : 1,
    config: { mass: 5, friction: 20, tension: 20 },
    onChange: ({ value }) => {
      setDimmingValue(value.dimming);
    },
  });

  const handleClick = (event) => {
    event.stopPropagation();
    //console.log(`Light ${id} clicked!`);
    if (onClick) onClick(id); // Pass the id to any additional onClick handler

    // Trouver l'index de la lumière cliquée
    const lightKeys = Object.keys(lights);
    const selectedIndex = lightKeys.indexOf(id);

    if (animationComplete || !gaussianVisible) {
      setFocusMode(true);
      setSelectedLightIndex(selectedIndex); // Définir l'index de la lumière sélectionnée
    }
  };

  useEffect(() => {
    const lightKeys = Object.keys(lights);
    const selectedLightId = lightKeys[selectedLightIndex];
    setIsActive(id === selectedLightId || !focusMode);
  }, [selectedLightIndex, id, lights, focusMode]);

  return (
    <group
      onClick={handleClick}
      position={position}
      scale={scale}
      rotation={rotation}
      opacity={0.4}
    >
      <Component dimmingValue={dimmingValue} />
    </group>
  );
}
