import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import { scenes } from "../scenes";
import {
  sceneStore,
  globalStore,
  useAnimationStore,
  cameraPathsStore,
} from "../store";

export default function Header() {
  //const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredScene, setHoveredScene] = useState(null);
  const navigate = useNavigate();

  const messages = [
    "Select a light for more details",
    "Drag to look around",
    "빛을 선택하여 정보를 확인하세요",
    "드래그하여 둘러보세요",
  ];
  const [toggleText, setToggleText] = useState(messages[0]);

  const { selectedScene } = sceneStore((state) => state);
  const setSelectedScene = sceneStore((state) => state.setSelectedScene);

  const stopAnimation = useAnimationStore((state) => state.stopAnimation);
  const setSplatLoaded = globalStore((state) => state.setSplatLoaded);

  const menuOpen = globalStore((state) => state.menuOpen);
  const setMenuOpen = globalStore((state) => state.setMenuOpen);

  const setExpandedDesc = globalStore((state) => state.setExpandedDesc);
  const focusMode = cameraPathsStore((state) => state.focusMode);

  const splatLoaded = globalStore((state) => state.splatLoaded);

  const animationComplete = cameraPathsStore(
    (state) => state.animationComplete
  );

  const { sceneName } = useParams();
  const location = useLocation();

  useEffect(() => {}, []);

  useEffect(() => {
    if (animationComplete) {
      let index = 0;

      const interval = setInterval(() => {
        index = (index + 1) % messages.length; // Toggle between 0 and 1
        setToggleText(messages[index]);
      }, 2000);
      return () => clearInterval(interval); // Clean up the interval on unmount
    }
  }, [animationComplete]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setHoveredScene(null);
  };

  const handleSceneClick = (sceneValue) => {
    // if click current scene hide menu
    if (sceneValue === selectedScene) {
      setMenuOpen(false);
      return;
    }

    setSplatLoaded(false);
    stopAnimation();
    setExpandedDesc(false);
    setHoveredScene(null);

    setSelectedScene(sceneValue);

    setMenuOpen(false);
    navigate(`/${sceneValue}`);
    navigate(0);
    //window.location.href = `/${sceneValue}`;
  };

  const handleMouseEnter = (sceneValue) => {
    setHoveredScene(sceneValue);
  };

  const handleMouseLeave = () => {
    setHoveredScene(null);
  };

  //console.log(location.pathname);
  const scene = scenes.find((scene) => scene.value === selectedScene);

  return (
    <div className="text-purple ">
      {(sceneName || location.pathname != "/") && (
        <>
          <div className="absolute top-0 right-0 z-40">
            <div
              onClick={toggleMenu}
              className={`p-4 text-2xl md:text-3xl cursor-pointer leading-tight ${
                !menuOpen && selectedScene ? "text-white" : ""
              }`}
            >
              Menu
            </div>
          </div>
          {!focusMode && selectedScene && (
            <>
              {/* <div className="absolute top-0 left-0 z-30">
                <div
                  onClick={toggleMenu}
                  className={`p-4 text-3xl cursor-pointer text-white`}
                >
                  ECAL × AGO <br /> Seoul Highlights
                </div>
              </div> */}
              <div
                className={`absolute top-0 left-0 z-30 ${
                  splatLoaded ? "fade-in-delay" : ""
                }`}
              >
                <div
                  className={`p-4 w-3/4 md:w-4/5 text-2xl md:text-4xl lg:text-5xl cursor-pointer text-white leading-tight`}
                >
                  {scene.location}. {scene.district} District
                </div>
              </div>
              {animationComplete && (
                <div className="absolute left-0 bottom-0 z-30 fade-in">
                  <div
                    className={`p-4 text-2xl md:text-3xl text-white animate-pulse leading-tight`}
                  >
                    {toggleText}
                  </div>
                </div>
              )}
            </>
          )}
        </>
      )}

      {((menuOpen && location.pathname !== "/") ||
        location.pathname === "/") && (
        <>
          <div
            className={`absolute w-full h-full ${
              location.pathname != "/" ? "bg-cream text-purple" : "text-white"
            }  z-50`}
          >
            {location.pathname == "/" ? (
              <>
                <div className="absolute top-0 left-0 z-50 text-center w-full">
                  <div className="p-4 text-2xl md:text-3xl w-full">
                    ECAL × AGO
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 z-50 text-center w-full">
                  <Link
                    to="/about"
                    onClick={() => {
                      stopAnimation();
                      setMenuOpen(false);
                      setSelectedScene(null);
                    }}
                    className="p-4 text-2xl md:text-3xl w-full block"
                  >
                    Seoul Highlights
                    <br />
                    서울 하이라이트
                  </Link>
                </div>
              </>
            ) : (
              <div className="absolute top-0 left-0 z-50">
                <Link
                  to="/"
                  onClick={() => {
                    stopAnimation();
                    setMenuOpen(false);
                    setSelectedScene(null);
                  }}
                  className="p-4 text-2xl md:text-3xl cursor-pointer block leading-tight"
                >
                  Seoul Highlights
                  <br />
                  서울 하이라이트
                </Link>
              </div>
            )}

            {location.pathname != "/" && (
              <>
                <div className="absolute top-0 right-0 leading-tight z-50">
                  <div
                    onClick={toggleMenu}
                    className={`p-4 text-2xl md:text-3xl cursor-pointer leading-tight`}
                  >
                    Close
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 z-50">
                  <Link
                    to="/about"
                    onClick={() => {
                      stopAnimation();
                      setMenuOpen(false);
                      setSelectedScene(null);
                      navigate("/about");
                    }}
                    className="p-4 text-2xl md:text-3xl cursor-pointer inline-block leading-tight"
                  >
                    About ECAL x AGO
                  </Link>
                </div>
              </>
            )}
            <nav
              className={`flex flex-col items-center justify-center gap-y-6 h-full  ${
                location.pathname == "/" && splatLoaded
                  ? "fade-in-delay"
                  : "fade-in"
              }`}
            >
              {scenes
                .filter((scene) => scene.menu) // Filter scenes with menu: true
                .map((scene) => (
                  <div
                    key={scene.value}
                    onClick={() => handleSceneClick(scene.value)}
                    onMouseEnter={() => handleMouseEnter(scene.svg)}
                    onMouseLeave={handleMouseLeave}
                    className="text-4xl md:text-5xl cursor-pointer relative"
                  >
                    {scene.projectName}
                  </div>
                ))}
            </nav>
            {hoveredScene !== null && (
              <div className="fixed inset-0 z-30 flex items-center justify-center pointer-events-none">
                <img src={"/svg/" + hoveredScene + ".svg"} className="h-4/5" />
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
