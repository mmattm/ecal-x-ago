import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { cameraPathsStore } from "../store";
import { globalStore, lightStore } from "../store";
import { scenes } from "../scenes"; // Assuming scenes are exported from a config file

export default function Sidebar() {
  //const [isExpanded, setIsExpanded] = useState(false); // State to manage the sidebar height

  const focusMode = cameraPathsStore((state) => state.focusMode);
  const setFocusMode = cameraPathsStore((state) => state.setFocusMode);
  const nextLight = lightStore((state) => state.nextLight);
  const location = useLocation();

  const expandedDesc = globalStore((state) => state.expandedDesc);
  const setExpandedDesc = globalStore((state) => state.setExpandedDesc);

  const handleClose = () => {
    setFocusMode(false);
    setExpandedDesc(false);
  };

  const handleReadMore = () => {
    setExpandedDesc(!expandedDesc);
  };

  const currentScene = scenes.find(
    (scene) => `/${scene.value}` === location.pathname
  );

  return (
    <div
      className={`overflow-hidden z-40 absolute w-full bottom-0 transition-all duration-500 bg-cream text-purple ${
        focusMode ? (expandedDesc ? "h-full" : "h-1/3") : "h-0"
      }`}
    >
      <div className="p-4 h-full flex flex-col">
        <div className="flex items-start justify-between">
          <h4
            className={`cursor-pointer transition-all ${
              expandedDesc ? "text-5xl md:text-7xl" : "text-4xl md:text-5xl"
            }`}
            onClick={handleClose}
          >
            {currentScene?.projectName}
          </h4>

          <h4
            className="text-2xl md:text-3xl cursor-pointer"
            onClick={handleClose}
          >
            Close
          </h4>
        </div>

        <div className="mt-4 flex-grow overflow-y-auto">
          <div
            dangerouslySetInnerHTML={{
              __html: currentScene?.shortDescription,
            }}
          />

          {expandedDesc && (
            <div className="mt-4 w-full md:w-4/5 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                className=""
                dangerouslySetInnerHTML={{
                  __html: currentScene.longDescriptionEn,
                }}
              />
              <div
                className=""
                dangerouslySetInnerHTML={{
                  __html: currentScene.longDescriptionCo, // Assuming you have a French description here
                }}
              />
            </div>
          )}
        </div>
        {/* flex two columns space be empty */}
        <div className="flex justify-between">
          <div className="self-start">
            <p
              className="inline-block text-2xl md:text-3xl cursor-pointer pt-4"
              onClick={handleReadMore}
            >
              {expandedDesc ? "Read less" : "Read more"}
            </p>
          </div>
          {!expandedDesc && (
            <div className="self-start">
              <p
                className="text-2xl md:text-3xl cursor-pointer pt-4"
                onClick={nextLight}
              >
                Next
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
