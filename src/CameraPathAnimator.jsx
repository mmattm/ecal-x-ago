/* eslint-disable react/prop-types */
import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { CameraControls, Line } from "@react-three/drei";
import gsap from "gsap";
import { CatmullRomCurve3, Vector3, MathUtils } from "three";
import {
  useAnimationStore,
  cameraPathsStore,
  fovStore,
  lightStore,
  sceneStore,
} from "./store";
import { editorMode } from "./config";
import { scenes } from "./scenes";

export default function CameraPathAnimator({
  points, // Receiving points from parent for the camera path
  targetPoints, // Receiving points from parent for the target path
  duration,
}) {
  // get store state
  const playAnimation = useAnimationStore((state) => state.playAnimation);
  const selectedCameraPathId = cameraPathsStore(
    (state) => state.selectedCameraPathId
  );
  const loop = cameraPathsStore((state) => state.loop);

  const selectedScene = sceneStore((state) => state.selectedScene);

  const cameraPaths = cameraPathsStore((state) => state.cameraPaths);
  //const setCameraPath = cameraPathsStore((state) => state.setCameraPath);

  const fov = fovStore((state) => state.fov);
  const setFov = fovStore((state) => state.setFov);

  const cameraControlsRef = useRef();
  const animationProgress = useRef({ value: 0 });
  const tempVec = new Vector3();
  const tempTargetVec = new Vector3();

  //const cameraPosition = cameraPathsStore((state) => state.cameraPosition);
  const focusMode = cameraPathsStore((state) => state.focusMode);
  const setFocusMode = cameraPathsStore((state) => state.setFocusMode);

  const lights = lightStore((state) => state.lights);
  const selectedLightIndex = lightStore((state) => state.selectedLightIndex);

  // Define the CatmullRomCurve3 using the passed points for camera and target paths
  const cameraCurve = new CatmullRomCurve3(
    points.map((p) => new Vector3(...p)),
    false, // not a closed loop
    "catmullrom", // type of the curve
    0.2 // tension parameter for smoothness of the curve
  );

  const targetCurve = new CatmullRomCurve3(
    targetPoints.map((p) => new Vector3(...p)),
    false,
    "catmullrom",
    0.2 // same tension for target curve
  );

  // Generate interpolated points for smooth curves
  const interpolatedCameraPoints = cameraCurve.getPoints(50);
  const interpolatedTargetPoints = targetCurve.getPoints(50);

  useEffect(() => {
    //console.log(cameraControlsRef.current.distance);

    if (cameraControlsRef.current) {
      //console.log("CameraControls", cameraControlsRef.current);

      cameraControlsRef.current.minDistance = 2; // Prevent zooming too close
      cameraControlsRef.current.maxDistance = 10; // Prevent zooming too far
      cameraControlsRef.current.minPolarAngle = MathUtils.degToRad(0); // Prevent looking below level
      cameraControlsRef.current.maxPolarAngle = MathUtils.degToRad(90); // Allow upward tilt
      cameraControlsRef.current.smoothTime = 0.5; // Smooth the camera movement

      cameraControlsRef.current.mouseButtons.right = 0;
    }
  }, [cameraControlsRef]);

  useEffect(() => {
    const scene = scenes.find((s) => s.value === selectedScene);

    if (scene) {
      //console.log("scene.defaultCameraPath", scene.defaultCameraPath);
      cameraPathsStore.setState({
        selectedCameraPath: scene.defaultCameraPath,
      });
    }
  }, [selectedScene]);

  useEffect(() => {
    stopAnimation();
    const selectedPath = cameraPaths.find(
      (path) => path.id === selectedCameraPathId
    );

    setFov(selectedPath.fov);
    //console.log("Selected FOV", selectedPath.fov);
  }, [selectedCameraPathId]);

  useEffect(() => {
    //console.log("update camera fov to : ", fov);
    if (cameraControlsRef.current) cameraControlsRef.current.zoomTo(fov);
  }, [fov]);

  useEffect(() => {
    if (cameraControlsRef.current) {
      if (focusMode) {
        cameraControlsRef.current.mouseButtons.wheel = null;
        cameraControlsRef.current.mouseButtons.right = null;
      } else {
        cameraControlsRef.current.mouseButtons.wheel = 8;
        cameraControlsRef.current.mouseButtons.right = 2;
        cameraControlsRef.current.mouseButtons.right = null;
      }
    }
  }, [focusMode]);

  useEffect(() => {
    // Récupérer la lumière sélectionnée à partir de l'index

    const lightKeys = Object.keys(lights);
    const selectedLight = lights[lightKeys[selectedLightIndex]];
    const selectedLightPosition = selectedLight ? selectedLight.position : null;

    if (cameraControlsRef.current && focusMode && selectedLightPosition) {
      //console.log("Selected Light Position", selectedLightPosition);

      const distance = 1;

      cameraControlsRef.current.setLookAt(
        selectedLightPosition[0] + distance,
        selectedLightPosition[1] + distance,
        selectedLightPosition[2] + distance,
        selectedLightPosition[0],
        selectedLightPosition[1] + 0.5,
        selectedLightPosition[2],
        true
      );
    } else {
      moveToStartPoint();
    }
  }, [lights, selectedLightIndex, focusMode]);

  const startAnimation = () => {
    gsap.fromTo(
      animationProgress.current,
      { value: 0 },
      {
        value: 1, // Move from start (0) to end (1)
        duration: duration,
        ease: selectedCameraPathId.ease, // Linear easing for constant speed
        onUpdate: () => {
          // Get the current point along the camera curve
          cameraCurve.getPoint(animationProgress.current.value, tempVec);

          // Get the current point along the target curve
          targetCurve.getPoint(animationProgress.current.value, tempTargetVec);

          // Use CameraControls to set the camera position and target (lookAt)
          cameraControlsRef?.current.setLookAt(
            tempVec.x,
            tempVec.y,
            tempVec.z,
            tempTargetVec.x,
            tempTargetVec.y,
            tempTargetVec.z,
            false // instant change, no smoothing between updates
          );
        },
        onStart: () => {
          cameraControlsRef.current.enabled = false; // Disable controls during animation
        },
        onComplete: () => {
          cameraControlsRef.current.enabled = true; // Re-enable controls after animation
          if (loop) {
            startAnimation(); // Loop the animation if needed
          }
        },
      }
    );
  };

  const moveToStartPoint = () => {
    cameraCurve.getPoint(0, tempVec);
    targetCurve.getPoint(0, tempTargetVec);
    cameraControlsRef.current.setLookAt(
      tempVec.x,
      tempVec.y,
      tempVec.z,
      tempTargetVec.x,
      tempTargetVec.y,
      tempTargetVec.z,
      true // smooth transition to start point
    );
  };

  const stopAnimation = () => {
    gsap.killTweensOf(animationProgress.current); // Stop any ongoing animation
    animationProgress.current.value = 0; // Reset progress
    updateCameraFov(); // Reset FOV
    moveToStartPoint(); // Move camera to the start
    cameraControlsRef.current.enabled = true; // Re-enable controls
  };

  const updateCameraFov = () => {
    cameraControlsRef.current.zoomTo(fov);
  };

  useFrame((_, delta) => {
    if (cameraControlsRef.current) {
      cameraControlsRef.current.update(delta);

      // Orbit around target if focusMode is active
      if (focusMode) {
        cameraControlsRef.current.azimuthAngle += (10 * delta * Math.PI) / 180; // Increment azimuthAngle for smooth rotation
      }
    }
  });

  // Trigger animation when playAnimation changes
  useEffect(() => {
    setFocusMode(false);

    if (playAnimation) {
      startAnimation();
    } else {
      stopAnimation();
    }
  }, [playAnimation]);

  return (
    <>
      {/* Render the camera and target curves as Lines in red */}
      {!playAnimation && editorMode && (
        <>
          <Line points={interpolatedCameraPoints} color="white" lineWidth={1} />
          <Line points={interpolatedTargetPoints} color="red" lineWidth={1} />
        </>
      )}
      {/* Camera controls to animate the camera along the curve */}
      <CameraControls ref={cameraControlsRef} />
    </>
  );
}
