// SceneLayout.jsx
import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Loading from "./components/Loading";
import { globalStore, cameraPathsStore, sceneStore } from "./store";
import { rootScene } from "./config";

import { useParams, useNavigate } from "react-router-dom";

// Import scenes
import OilTank from "./scenes/OilTank";
import YounhyounMaterialLibrary from "./scenes/YounhyounMaterialLibrary";
import PostArchiveFaction from "./scenes/PostArchiveFaction";
import SimulghwanBotanicGarden from "./scenes/SimulghwanBotanicGarden";
import SwissEmbassyOutside from "./scenes/SwissEmbassyOutside";
import StreetMarket from "./scenes/StreetMarket";
import StreetSeoul from "./scenes/StreetSeoul";

export default function SceneLayout() {
  const focusMode = cameraPathsStore((state) => state.focusMode);
  const splatLoaded = globalStore((state) => state.splatLoaded);
  const gaussianVisible = globalStore((state) => state.gaussianVisible);

  return (
    <>
      <Header />
      <div className="h-dvh">
        <div
          className={`overflow-hidden w-full transition-all duration-500 ${
            focusMode ? "h-2/3" : "h-full"
          }`}
        >
          <Suspense fallback={<Loading />}>
            {!splatLoaded && gaussianVisible && <Loading />}
            <Canvas id="main" resize={{ debounce: 0 }} shadows>
              <Stage />
            </Canvas>
          </Suspense>
        </div>
        <Sidebar />
      </div>
    </>
  );
}

function Stage() {
  // const navigate = useNavigate();
  const { sceneName } = useParams();

  const selectedScene = sceneStore((state) => state.selectedScene);
  const setSelectedScene = sceneStore((state) => state.setSelectedScene);

  // useEffect(() => {
  //   if (sceneName && sceneName !== selectedScene) {
  //     console.log("sceneName", sceneName);

  //     // Set the selected scene to match the URL
  //     setSelectedScene(sceneName);
  //   } else if (!sceneName) {
  //     // Default to `rootScene` when no sceneName is in the URL
  //     setSelectedScene(rootScene);
  //   }
  // }, [sceneName, selectedScene, setSelectedScene]);

  useEffect(() => {
    console.log("sceneName", sceneName);

    if (!selectedScene || selectedScene !== sceneName) {
      setSelectedScene(sceneName || rootScene); // Set to `sceneName` or default
    }
  }, [sceneName, selectedScene, setSelectedScene]);

  const renderScene = () => {
    switch (selectedScene) {
      case "oil-tank":
        return <OilTank />;
      case "younhyoun-material-library":
        return <YounhyounMaterialLibrary />;
      case "post-archive-faction":
        return <PostArchiveFaction />;
      case "simulghwan-botanic-garden":
        return <SimulghwanBotanicGarden />;
      case "swiss-embassy-outside":
        return <SwissEmbassyOutside />;
      case "StreetMarket":
        return <StreetMarket />;
      case "StreetSeoul":
        return <StreetSeoul />;
      default:
        return <StreetSeoul />;
    }
  };

  return (
    <>
      {selectedScene && renderScene()}
      {/* <CustomRenderLoop /> */}
    </>
  );
}

// // Custom render loop using useFrame
// function CustomRenderLoop() {
//   useFrame(({ gl, scene, camera }) => {
//     // Manually trigger rendering
//     gl.render(scene, camera);
//   }, 1); // Priority 1: taking over the render loop

//   return null; // No need to render anything else here
// }
