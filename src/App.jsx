/* eslint-disable react/prop-types */
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import About from "./pages/About";
import SceneLayout from "./sceneLayout";

export default function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          {/* Root path / */}
          <Route path="/" element={<SceneLayout />} />

          {/* Dynamic path /:sceneName */}
          <Route path="/:sceneName" element={<SceneLayout />} />

          {/* About page */}
          <Route path="/about" element={<About />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}
