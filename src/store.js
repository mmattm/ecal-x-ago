// store.js
import { create } from "zustand";
import { cameraPaths, scenes } from "./config";

//const firstScene = "SimulghwanBotanicGarden";
const firstScene = scenes[0].value;

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
  sky: true,
  setSky: (visible) => set({ sky: visible }),
  // New value ranging from 1 to 300
  splatAlphaRemovalThreshold: 1,
  setSplatAlphaRemovalThreshold: (value) =>
    set({ splatAlphaRemovalThreshold: Math.min(Math.max(value, 1), 255) }),
  splat3D: true,
  setSplat3D: (value) => set({ splat3D: value }),
}));

export const sceneStore = create((set) => ({
  selectedScene: firstScene, // Set your default scene here
  setSelectedScene: (scene) => set({ selectedScene: scene }),
}));

// Store to manage camera paths, including FOV
export const cameraPathsStore = create((set) => ({
  cameraPaths: cameraPaths,
  selectedCameraPath: cameraPaths[0].id,
  setCameraPath: (id) => set({ selectedCameraPath: id }),
  cameraPosition: [{ x: 0, y: 0, z: 0 }],
  setCameraPosition: (position) => set({ cameraPosition: position }),
}));

// Create a separate fovStore
export const fovStore = create((set) => ({
  fov: cameraPaths[0].fov, // Initial FOV matching the initial selected path
  setFov: (newFov) => set({ fov: newFov }),
}));
