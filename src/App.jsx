/* eslint-disable react/prop-types */
import "./App.css";
import { Canvas, useFrame } from "@react-three/fiber";
import { useSceneControls } from "./controls"; // Import the controls
import { sceneStore } from "./store";
import Scene01 from "./scenes/scene01";
import Scene02 from "./scenes/scene02";

export default function App() {
  return (
    <>
      <Canvas id="main" shadows>
        <Stage />
      </Canvas>
    </>
  );
}

function Stage() {
  useSceneControls(); // This hook now handles both scene control and recording
  const selectedScene = sceneStore((state) => state.selectedScene);

  return (
    <>
      {selectedScene === "scene_01" && <Scene01 />}
      {selectedScene === "scene_02" && <Scene02 />}
      <CustomRenderLoop /> {/* Custom render loop component */}
    </>
  );
}

// Custom render loop using useFrame
function CustomRenderLoop() {
  useFrame(({ gl, scene, camera }) => {
    // Manually trigger rendering
    gl.render(scene, camera);
  }, 1); // Priority 1: taking over the render loop

  return null; // No need to render anything else here
}
