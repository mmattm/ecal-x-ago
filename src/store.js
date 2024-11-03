// store.js
import { create } from "zustand";
import { cameraPaths } from "./config";
import { scenes } from "./scenes";

//const firstScene = "SimulghwanBotanicGarden";
//const firstScene = scenes[0].value;

const fistCameraPath = "Oil Tank apparition"; //cameraPaths[0].id;
const playAnimation = false;
const loop = false;
const gaussianVisible = true;

export const useAnimationStore = create((set) => ({
  playAnimation: playAnimation,
  startAnimation: () => set({ playAnimation: true }),
  stopAnimation: () => set({ playAnimation: false }),
  toggleAnimation: () =>
    set((state) => ({ playAnimation: !state.playAnimation })),
}));

export const globalStore = create((set) => ({
  gaussianVisible: gaussianVisible,
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
  splatLoaded: false,
  setSplatLoaded: (value) => set({ splatLoaded: value }),
}));

export const sceneStore = create((set) => ({
  selectedScene: null, // Set your default scene here
  setSelectedScene: (scene) => set({ selectedScene: scene }),
}));

// Store to manage camera paths, including FOV
export const cameraPathsStore = create((set) => ({
  cameraPaths: cameraPaths,
  selectedCameraPathId: fistCameraPath,
  setCameraPathId: (id) => set({ selectedCameraPathId: id }),
  cameraPosition: { x: 0, y: 0, z: 0 },
  setCameraPosition: (position) => set({ cameraPosition: position }),
  focusMode: false,
  setFocusMode: (mode) => set({ focusMode: mode }),
  loop: loop,
}));

// Create a separate fovStore
export const fovStore = create((set) => ({
  fov: cameraPaths[0].fov, // Initial FOV matching the initial selected path
  setFov: (newFov) => set({ fov: newFov }),
}));

export const lightStore = create((set) => ({
  lights: {},
  selectedLightIndex: 0, // Index de la lumière sélectionnée actuellement

  addLights: (newLights) =>
    set((state) => ({
      lights: { ...state.lights, ...newLights },
    })),

  resetLights: () => set({ lights: {}, selectedLightIndex: 0 }),

  // Fonction pour définir l'index de la lumière sélectionnée
  setSelectedLightIndex: (index) => set({ selectedLightIndex: index }),

  // Fonction pour passer à la lumière suivante
  nextLight: () =>
    set((state) => {
      const lightKeys = Object.keys(state.lights); // Liste des IDs des lumières
      const nextIndex = (state.selectedLightIndex + 1) % lightKeys.length;
      return {
        selectedLightIndex: nextIndex,
      };
    }),

  // Getter pour récupérer l'objet de la lumière sélectionnée
  selectedLight: (state) => {
    const lightKeys = Object.keys(state.lights);
    return state.lights[lightKeys[state.selectedLightIndex]];
  },

  // Getter pour récupérer uniquement la position de la lumière sélectionnée
  selectedLightPosition: (state) => {
    const selectedLight = state.selectedLight(state); // Appelez selectedLight en tant que fonction
    return selectedLight && Array.isArray(selectedLight.position)
      ? selectedLight.position
      : null;
  },
}));
