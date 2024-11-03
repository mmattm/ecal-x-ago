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
    }, 300);

    const textInterval = setInterval(() => {
      setShowKoreanText((prevState) => !prevState);
    }, 2000); // Total cycle duration (fade out + fade in)

    // Clear the intervals on component unmount
    return () => {
      clearInterval(shapeInterval);
      clearInterval(textInterval);
    };
  }, [shapes.length]);

  return (
    <div className="fixed w-full h-full flex items-center justify-center z-50 bg-cream text-purple p-4">
      <h2 className="text-6xl text-center absolute top-10">
        ECAL × AGO <br /> Seoul Highlights
      </h2>

      {/* Text Container */}
      <div className="absolute bottom-10 w-full flex justify-center">
        {/* Korean Text */}
        <h2
          className={`text-6xl text-center absolute bottom-10 transition-opacity duration-1000 ${
            showKoreanText ? "opacity-100" : "opacity-0"
          }`}
        >
          서울 하이라이트
        </h2>

        {/* Loading Text */}
        <h2
          className={`text-6xl text-center absolute bottom-10 transition-opacity duration-1000 ${
            showKoreanText ? "opacity-0" : "opacity-100"
          }`}
        >
          Loading …
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
