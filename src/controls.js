import { useControls, button } from "leva";
import { useEffect, useState } from "react";

import {
  useAnimationStore,
  globalStore,
  sceneStore,
  cameraPathsStore,
  fovStore,
} from "./store"; // Import the store

const scenes = [
  { label: "Scene 01", value: "scene_01" },
  { label: "Scene 02", value: "scene_02" },
];

export function useSceneControls() {
  const toggleGaussianVisible = globalStore(
    (state) => state.toggleGaussianVisible
  );
  const playAnimation = useAnimationStore((state) => state.playAnimation);
  const toggleAnimation = useAnimationStore((state) => state.toggleAnimation);
  const gaussian = globalStore((state) => state.gaussianVisible);
  const setGaussianVisible = globalStore((state) => state.setGaussianVisible);
  const setSelectedScene = sceneStore((state) => state.setSelectedScene);

  // Access fovStore
  const fov = fovStore((state) => state.fov);
  const setFov = fovStore((state) => state.setFov);

  // Access cameraPathsStore
  const cameraPaths = cameraPathsStore((state) => state.cameraPaths);
  const selectedCameraPath = cameraPathsStore(
    (state) => state.selectedCameraPath
  );
  const setCameraPath = cameraPathsStore((state) => state.setCameraPath);

  // Get the set function from useControls to programmatically update controls
  const [, set] = useControls(
    () => ({
      selectedScene: {
        label: "Scene",
        options: scenes.reduce((acc, cur) => {
          acc[cur.value] = cur.label;
          return acc;
        }, {}),
        onChange: (value) => {
          setSelectedScene(value);
        },
        disabled: playAnimation,
      },
      cameraPath: {
        label: "Camera Path",
        options: cameraPaths.reduce((acc, path) => {
          acc[path.id] = path.id;
          return acc;
        }, {}),
        value: selectedCameraPath,
        onChange: (value) => {
          setCameraPath(value);
          const selectedPath = cameraPaths.find((path) => path.id === value);
          if (selectedPath) {
            setFov(selectedPath.fov);
          }
        },
        disabled: playAnimation,
      },
      fov: {
        label: "FOV",
        value: fov,
        min: 1,
        max: 4,
        onChange: (value) => {
          setFov(value);
        },
        disabled: playAnimation,
      },
      gaussianVisible: {
        label: "Splats",
        value: gaussian,
        onChange: (value) => {
          setGaussianVisible(value);
        },
        disabled: playAnimation,
      },
      grid: {
        label: "Grid",
        value: true,
        onChange: (value) => {
          globalStore.setState({ grid: value });
        },
        disabled: playAnimation,
      },
      [playAnimation ? "Stop animation" : "Play animation"]: button(() => {
        toggleAnimation();
      }),
    }),
    [playAnimation, fov] // Include playAnimation in the dependency array
  );

  // Sync the control values with store changes
  useEffect(() => {
    set({ fov });
  }, [fov, set]);
}
