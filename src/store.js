// store.js
import { create } from "zustand";
import { cameraPaths } from "./config"; // Adjust the path as needed

export const useAnimationStore = create((set) => ({
  playAnimation: false,
  startAnimation: () => set({ playAnimation: true }),
  stopAnimation: () => set({ playAnimation: false }),
  toggleAnimation: () =>
    set((state) => ({ playAnimation: !state.playAnimation })),
}));

export const globalStore = create((set) => ({
  gaussianVisible: false,
  setGaussianVisible: (visible) => set({ gaussianVisible: visible }),
  toggleGaussianVisible: () =>
    set((state) => ({ gaussianVisible: !state.gaussianVisible })),
  grid: true,
  setGrid: (visible) => set({ grid: visible }),
}));

export const sceneStore = create((set) => ({
  selectedScene: "scene_01",
  setSelectedScene: (scene) => set({ selectedScene: scene }),
}));

// Store to manage camera paths, including FOV
export const cameraPathsStore = create((set) => ({
  cameraPaths: cameraPaths,
  selectedCameraPath: "path1",
  setCameraPath: (id) => set({ selectedCameraPath: id }),
}));

// Create a separate fovStore
export const fovStore = create((set) => ({
  fov: 1, // Initial FOV matching the initial selected path
  setFov: (newFov) => set({ fov: newFov }),
}));
