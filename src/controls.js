/* eslint-disable react-hooks/rules-of-hooks */
import { useControls, button } from "leva";
import { useState, useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Recorder, RecorderStatus, Encoders } from "canvas-record";
import { AVC } from "media-codecs";
import { scenes } from "./config";

import { videoMode } from "./config";

import {
  useAnimationStore,
  globalStore,
  sceneStore,
  cameraPathsStore,
  fovStore,
} from "./store";

export function useSceneControls() {
  // Conditionally return early if videoMode is true
  if (videoMode) {
    return;
  }

  const playAnimation = useAnimationStore((state) => state.playAnimation);
  const toggleAnimation = useAnimationStore((state) => state.toggleAnimation);
  const gaussian = globalStore((state) => state.gaussianVisible);
  const setGaussianVisible = globalStore((state) => state.setGaussianVisible);

  const selectedScene = sceneStore((state) => state.selectedScene);
  const setSelectedScene = sceneStore((state) => state.setSelectedScene);
  const splatAlphaRemovalThreshold = globalStore(
    (state) => state.splatAlphaRemovalThreshold
  );
  const setSplatAlphaRemovalThreshold = globalStore(
    (state) => state.setSplatAlphaRemovalThreshold
  );

  const splat3D = globalStore((state) => state.splat3D);
  const setSplat3D = globalStore((state) => state.setSplat3D);

  // Access fovStore
  const fov = fovStore((state) => state.fov);
  const setFov = fovStore((state) => state.setFov);

  // Access cameraPathsStore
  const cameraPaths = cameraPathsStore((state) => state.cameraPaths);
  const selectedCameraPath = cameraPathsStore(
    (state) => state.selectedCameraPath
  );
  const setCameraPath = cameraPathsStore((state) => state.setCameraPath);

  const grid = globalStore((state) => state.grid);
  const sky = globalStore((state) => state.sky);

  // Start functions for recording
  // –––––--------------------------------------------–––––
  const canvasRecorder = useRef(null);
  const [isRecording, setIsRecording] = useState(false);
  const [isRendering, setIsRendering] = useState(false);
  const { gl, size, camera } = useThree(); // Access the WebGL renderer and size

  // Use `useFrame` to log the camera position on every frame
  useFrame(() => {
    console.log(
      "camera position: ",
      "[" +
        camera.position.x.toFixed(2) +
        "," +
        camera.position.y.toFixed(2) +
        "," +
        camera.position.z.toFixed(2) +
        "]"
    );
  });

  // Function to initialize the WebGL canvas recorder at 1920x1080
  const startRecording = async () => {
    const canvas = gl.domElement; // Get the WebGL canvas from the renderer

    // Set the canvas size to Full HD (1920x1080) for recording
    // const fullHDWidth = 1920;
    // const fullHDHeight = 1080;

    // set size for 4k
    // const fullHDWidth = 1280;
    // const fullHDHeight = 720;

    const fullHDWidth = 1920;
    const fullHDHeight = 1080;

    // Resize the renderer to match Full HD resolution for recording
    gl.setSize(fullHDWidth, fullHDHeight, true);
    camera.aspect = fullHDWidth / fullHDHeight;
    camera.updateProjectionMatrix();

    // Get the WebGL context
    const context = canvas.getContext("webgl2");
    if (!context) {
      console.error("WebGL context not found!");
      return;
    }

    // Set up the canvas recorder
    canvasRecorder.current = new Recorder(context, {
      name: "canvas-record-example",
      // encoder: new Encoders.H264MP4Encoder({
      //   encoderOptions: {
      //     width: 1920, // Set the desired width (e.g., Full HD)
      //     height: 1080, // Set the desired height (e.g., Full HD)
      //     kbps: 10000000, // Set bitrate to 5Mbps (adjust as needed)
      //     framerate: 30, // Set the frame rate (30 FPS in this example)
      //     codec: AVC.getCodec({ profile: "High", level: "5.2" }), // Use High profile for better quality
      //   },
      // }),
      encoderOptions: {
        codec: AVC.getCodec({ profile: "Main", level: "5.2" }),
        // kbps: 20000000, // 10 Mbps, adjust to your needs
        frameRate: 60,
        width: fullHDWidth,
        height: fullHDHeight,
      },
    });

    await canvasRecorder.current.start();
    setIsRecording(true);
    console.log("startRecording");
    requestAnimationFrame(tick);
  };

  // Function to stop the recording
  const stopRecording = async () => {
    console.log("stopRecording");

    setIsRendering(true);
    if (
      canvasRecorder.current &&
      canvasRecorder.current.status === RecorderStatus.Recording
    ) {
      await canvasRecorder.current.stop();
      setIsRecording(false);
      setIsRendering(false);
      console.log("Rendering complete");

      // Restore the canvas size back to its original size
      gl.setSize(size.width, size.height, true);
      camera.aspect = size.width / size.height;
      camera.updateProjectionMatrix();
    }
  };

  // Animation tick function to capture each frame
  const tick = async () => {
    console.log("tick");

    if (
      canvasRecorder.current &&
      canvasRecorder.current.status === RecorderStatus.Recording
    ) {
      await canvasRecorder.current.step();
      requestAnimationFrame(tick);
    }
  };

  const [controlsVisible, setControlsVisible] = useState(true); // Manage visibility state

  // Toggle controls visibility on 'h' key press
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key.toLowerCase() === "h") {
        setControlsVisible((prev) => !prev); // Toggle visibility
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown); // Clean up event listener
    };
  }, []);

  // Use Leva controls for all the previous logic + recording functionality
  const [, set] = useControls(
    () => ({
      selectedScene: {
        value: selectedScene, // Bind to the current value of selectedScene from the store
        label: "Scene",
        options: scenes.reduce((acc, cur) => {
          acc[cur.label] = cur.value; // Mapping label to value
          return acc;
        }, {}),
        onChange: (selected) => {
          const scene = scenes.find((scene) => scene.value === selected);
          setSelectedScene(scene?.value); // Update the store with the new value
        },
        disabled: playAnimation, // Disable controls if animation is playing
      },
      cameraPath: {
        label: "Camera Path",
        options: cameraPaths.reduce((acc, path) => {
          acc[path.id] = path.id;
          return acc;
        }, {}),
        value: selectedCameraPath,
        onChange: (value) => {
          setCameraPath(value);
          const selectedPath = cameraPaths.find((path) => path.id === value);

          if (selectedPath) {
            setFov(selectedPath.fov);
          }
        },
        disabled: playAnimation,
      },
      fov: {
        label: "FOV",
        value: fov,
        min: 0.5,
        max: 4,
        onChange: (value) => {
          setFov(value);
        },
        disabled: playAnimation,
      },
      gaussianVisible: {
        label: "Splats",
        value: gaussian,
        onChange: (value) => {
          setGaussianVisible(value);
        },
      },
      splat3D: {
        label: "Splats 3D",
        value: splat3D,
        onChange: (value) => {
          setSplat3D(value);
        },
      },
      splatAlphaRemovalThreshold: {
        label: "Splats Alpha Threshold",
        value: splatAlphaRemovalThreshold,
        min: 1,
        max: 255,
        onChange: (value) => {
          setSplatAlphaRemovalThreshold(value);
        },
      },
      sky: {
        label: "Sky",
        value: sky,
        onChange: (value) => {
          globalStore.setState({ sky: value });
        },
      },
      grid: {
        label: "Grid",
        value: grid,
        onChange: (value) => {
          globalStore.setState({ grid: value });
        },
      },

      // Use a static key and dynamically change the label inside the button
      Record: button(
        () => {
          if (isRecording) {
            stopRecording();
          } else {
            startRecording();
          }
        },
        {
          disabled: isRendering,
          label: isRecording ? "Stop Recording" : "Start Recording",
        }
      ), // Static key `recordingButton` ensures it doesn't move
      Play: button(
        () => {
          toggleAnimation();
        },
        {
          label: playAnimation ? "Stop Animation" : "Play Animation",
        }
      ),
      // [playAnimation ? "Stop animation" : "Play animation"]: button(() => {
      //   toggleAnimation();
      // }),
    }),
    [playAnimation, isRecording, isRendering, selectedScene]
  );

  // Sync the control values with store changes
  useEffect(() => {
    set({ fov });
  }, [fov, set]);
}
