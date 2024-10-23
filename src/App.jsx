/* eslint-disable react/prop-types */
import "./App.css";
import { Canvas, useFrame } from "@react-three/fiber";
import { sceneStore } from "./store";

// Import scenes
import OilTank from "./scenes/OilTank";
import YounhyounMaterialLibrary from "./scenes/YounhyounMaterialLibrary";
import PostArchiveFaction from "./scenes/PostArchiveFaction";
import SimulghwanBotanicGarden from "./scenes/SimulghwanBotanicGarden";
import SwissEmbassyOutside from "./scenes/SwissEmbassyOutside";

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
  const selectedScene = sceneStore((state) => state.selectedScene);

  const renderScene = () => {
    switch (selectedScene) {
      case "OilTank":
        return <OilTank />;
      case "YounhyounMaterialLibrary":
        return <YounhyounMaterialLibrary />;
      case "PostArchiveFaction":
        return <PostArchiveFaction />;
      case "SimulghwanBotanicGarden":
        return <SimulghwanBotanicGarden />;
      case "SwissEmbassyOutside":
        return <SwissEmbassyOutside />;
      default:
        return null;
    }
  };

  return (
    <>
      {renderScene()}
      {/* <CustomRenderLoop /> */}
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
