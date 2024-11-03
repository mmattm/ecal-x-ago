import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { scenes } from "../scenes";
import { sceneStore } from "../store";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredScene, setHoveredScene] = useState(null); // Track hovered item
  const navigate = useNavigate();
  const setSelectedScene = sceneStore((state) => state.setSelectedScene);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    setHoveredScene(null);
  };

  const handleSceneClick = (sceneValue) => {
    setSelectedScene(sceneValue);
    navigate(`/${sceneValue}`);
    setIsMenuOpen(false);
  };

  const handleMouseEnter = (sceneValue) => {
    setHoveredScene(sceneValue);
  };

  const handleMouseLeave = () => {
    setHoveredScene(null);
  };

  return (
    <div className="text-purple">
      <div className="absolute top-0 right-0 z-50">
        <div onClick={toggleMenu} className="p-4 text-3xl cursor-pointer">
          {isMenuOpen ? "Close" : "Menu"}
        </div>
      </div>

      {isMenuOpen && (
        <>
          <div className="absolute top-0 left-0 z-50">
            <div onClick={toggleMenu} className="p-4 text-3xl cursor-pointer">
              ECAL × AGO
              <br />
              Seoul Highlights
            </div>
          </div>
          <div className="absolute bottom-0 left-0 z-50">
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="p-4 text-3xl cursor-pointer inline-block"
            >
              About the project
            </Link>
          </div>
          <div className="fixed inset-0 bg-cream text-purple flex flex-col items-center justify-center z-40">
            <nav className="flex flex-col items-center space-y-6">
              {scenes.map((scene, index) => (
                <div
                  key={scene.value}
                  onClick={() => handleSceneClick(scene.value)}
                  onMouseEnter={() => handleMouseEnter(scene.svg)}
                  onMouseLeave={handleMouseLeave}
                  className="text-4xl cursor-pointer relative"
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
