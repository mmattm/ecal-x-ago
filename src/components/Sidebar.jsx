import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { cameraPathsStore } from "../store";
import { lightStore } from "../store";
import { scenes } from "../scenes"; // Assuming scenes are exported from a config file

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false); // State to manage the sidebar height

  const focusMode = cameraPathsStore((state) => state.focusMode);
  const setFocusMode = cameraPathsStore((state) => state.setFocusMode);
  const nextLight = lightStore((state) => state.nextLight);
  const location = useLocation();

  const handleClose = () => {
    setFocusMode(false);
    setIsExpanded(false);
  };

  const handleReadMore = () => {
    setIsExpanded((prev) => !prev); // Toggle the expanded state
  };

  const currentScene = scenes.find(
    (scene) => `/${scene.value}` === location.pathname
  );

  return (
    <div
      className={`overflow-hidden z-30 absolute w-full bottom-0 transition-all duration-500 bg-cream text-purple ${
        focusMode ? (isExpanded ? "h-full" : "h-1/3") : "h-0"
      }`}
    >
      <div className="p-4 h-full overflow-y-scroll">
        <div className="flex items-center justify-between">
          <h4 className="text-3xl cursor-pointer" onClick={handleClose}>
            {currentScene.projectName}
          </h4>
          {!isExpanded && (
            <h4 className="text-3xl cursor-pointer" onClick={nextLight}>
              Next →
            </h4>
          )}
        </div>

        <div
          className="mt-4"
          dangerouslySetInnerHTML={{
            __html: currentScene.shortDescription,
          }}
        />
        {isExpanded && (
          <div
            className="mt-4"
            dangerouslySetInnerHTML={{
              __html: currentScene.longDescription,
            }}
          />
        )}
        <>
          <p
            className="inline-block cursor-pointer mt-4 w-auto underline"
            onClick={handleReadMore}
          >
            {isExpanded ? "Read less" : "Read more"}
          </p>
        </>
      </div>
    </div>
  );
}
