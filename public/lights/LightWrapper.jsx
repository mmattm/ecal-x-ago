/* eslint-disable react/prop-types */
import React, { useEffect, useState, useRef } from "react";
import { lightStore } from "../store";
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

  const lights = lightStore((state) => state.lights);
  const setSelectedLightIndex = lightStore(
    (state) => state.setSelectedLightIndex
  );

  const selectedLightIndex = lightStore((state) => state.selectedLightIndex);
  const [isActive, setIsActive] = React.useState(false);
  const [dimmingValue, setDimmingValue] = useState(8);

  // Use useSpring with onChange to update dimmingValue
  const { dimming } = useSpring({
    dimming: !isActive ? 0 : 1,
    config: { mass: 1, friction: 10, tension: 20 },
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

    setFocusMode(true);
    setSelectedLightIndex(selectedIndex); // Définir l'index de la lumière sélectionnée
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
