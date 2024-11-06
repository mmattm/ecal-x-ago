import React, { useState, useEffect } from "react";

export default function Loading() {
  const shapes = [
    "/svg/frame.svg",
    "/svg/pole_01.svg",
    "/svg/pole_02.svg",
    "/svg/pole_03.svg",
    "/svg/quilt.svg",
    "/svg/upper.svg",
  ];

  const [currentShapeIndex, setCurrentShapeIndex] = useState(0);
  const [showKoreanText, setShowKoreanText] = useState(true);

  useEffect(() => {
    const shapeInterval = setInterval(() => {
      setCurrentShapeIndex((prevIndex) => (prevIndex + 1) % shapes.length);
    }, 400);

    // Clear the intervals on component unmount
    return () => {
      clearInterval(shapeInterval);
    };
  }, [shapes.length]);

  return (
    <div className="fixed w-full h-full flex  justify-center items-center z-50 bg-cream text-purple p-4">
      <h2 className="text-4xl md:text-5xl md:text-6xl text-center mt-10 absolute top-0">
        ECAL × AGO <br />
      </h2>

      {/* Centered Korean Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-4xl md:text-5xl text-center">
          Seoul Highlights <br />
          서울 하이라이트
        </h2>
      </div>

      {/* Loading Shape */}
      <div className="absolute bottom-10 w-full flex justify-center">
        <h2 className="text-4xl md:text-5xl text-center animate-pulse transition-opacity duration-1000">
          Loading scene...
        </h2>
      </div>

      <img
        src={shapes[currentShapeIndex]}
        alt="Loading shape"
        className="h-4/5" // Control the size of the SVG
      />
    </div>
  );
}
