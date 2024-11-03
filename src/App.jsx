/* eslint-disable react/prop-types */
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  useNavigate,
} from "react-router-dom";
import React, { Suspense, useEffect } from "react";

import { Canvas, useFrame } from "@react-three/fiber";
import { globalStore, sceneStore, cameraPathsStore } from "./store";
import { scenes } from "./scenes";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Loading from "./components/Loading";
import About from "./pages/About";

// Import scenes
import OilTank from "./scenes/OilTank";
import YounhyounMaterialLibrary from "./scenes/YounhyounMaterialLibrary";
import PostArchiveFaction from "./scenes/PostArchiveFaction";
import SimulghwanBotanicGarden from "./scenes/SimulghwanBotanicGarden";
import SwissEmbassyOutside from "./scenes/SwissEmbassyOutside";
import StreetMarket from "./scenes/StreetMarket";
import StreetSeoul from "./scenes/StreetSeoul";

export default function App() {
  const focusMode = cameraPathsStore((state) => state.focusMode);
  const setFocusMode = cameraPathsStore((state) => state.setFocusMode);
  const splatLoaded = globalStore((state) => state.splatLoaded);
  const gaussianVisible = globalStore((state) => state.gaussianVisible);

  return (
    <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route
            path="/:sceneName"
            element={
              <div className="h-dvh">
                <div
                  className={`overflow-hidden  w-full transition-all duration-500 overflow-hidden ${
                    focusMode ? "h-2/3" : "h-full"
                  }`}
                >
                  {/* <Loading /> */}
                  <Suspense fallback={<Loading />}>
                    {!splatLoaded && gaussianVisible && <Loading />}
                    <Canvas
                      id="main"
                      resize={{ debounce: 0 }}
                      shadows
                      onClick={() => {
                        // if (focusMode) setFocusMode(false);
                        //console.log("click");
                      }}
                    >
                      <Stage />
                    </Canvas>
                  </Suspense>
                </div>
                <Sidebar />
              </div>
            }
          />
          <Route path="/about" element={<About />} />
          {/* <Route
            path="/"
            element={
              <Canvas id="main" shadows>
                <Stage />
              </Canvas>
            }
          /> */}
        </Routes>
      </>
    </BrowserRouter>
  );
}

function Stage() {
  const navigate = useNavigate();
  const { sceneName } = useParams();

  const selectedScene = sceneStore((state) => state.selectedScene);
  const setSelectedScene = sceneStore((state) => state.setSelectedScene);

  // Initialiser `selectedScene` selon `sceneName` ou la scène par défaut
  useEffect(() => {
    if (selectedScene) {
      navigate(`/${selectedScene}`, { replace: true });
    } else if (sceneName) {
      setSelectedScene(sceneName);
    } else {
      setSelectedScene(scenes[0].value);
    }
  }, [sceneName, selectedScene, setSelectedScene, navigate]);

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
