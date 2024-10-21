/* eslint-disable react/prop-types */
import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { CameraControls, Line } from "@react-three/drei";
import gsap from "gsap";
import { CatmullRomCurve3, Vector3 } from "three";
import { useAnimationStore, cameraPathsStore, fovStore } from "./store";

export default function CameraPathAnimator({
  points, // Receiving points from parent for the camera path
  targetPoints, // Receiving points from parent for the target path
  duration,
  easing,
  loop = true,
}) {
  // get store state
  const playAnimation = useAnimationStore((state) => state.playAnimation);
  const selectedCameraPath = cameraPathsStore(
    (state) => state.selectedCameraPath
  );

  const cameraPaths = cameraPathsStore((state) => state.cameraPaths);

  const cameraPosition = cameraPathsStore((state) => state.cameraPosition);
  const setCameraPosition = cameraPathsStore(
    (state) => state.setCameraPosition
  );

  const fov = fovStore((state) => state.fov);
  const setFov = fovStore((state) => state.setFov);

  const cameraControlsRef = useRef();
  const animationProgress = useRef({ value: 0 });
  const tempVec = new Vector3();
  const tempTargetVec = new Vector3();

  // Define the CatmullRomCurve3 using the passed points for camera and target paths
  const cameraCurve = new CatmullRomCurve3(
    points.map((p) => new Vector3(...p))
  );
  const targetCurve = new CatmullRomCurve3(
    targetPoints.map((p) => new Vector3(...p))
  );

  // Generate 50 interpolated points for smooth curve for camera and target paths
  const interpolatedCameraPoints = cameraCurve.getPoints(50);
  const interpolatedTargetPoints = targetCurve.getPoints(50);

  useEffect(() => {
    stopAnimation();
  }, [selectedCameraPath]);

  // update camera fov
  useEffect(() => {
    if (cameraControlsRef.current) cameraControlsRef.current.zoomTo(fov);
  }, [fov]);

  const startAnimation = () => {
    gsap.fromTo(
      animationProgress.current,
      { value: 0 },
      {
        value: 1,
        duration: duration,
        ease: easing,
        onUpdate: () => {
          // Get the current point along the camera curve
          cameraCurve.getPoint(animationProgress.current.value, tempVec);

          // Get the current point along the target curve
          targetCurve.getPoint(animationProgress.current.value, tempTargetVec);

          // Use CameraControls to set the camera position and target (lookAt)
          cameraControlsRef.current.setLookAt(
            tempVec.x,
            tempVec.y,
            tempVec.z,
            tempTargetVec.x,
            tempTargetVec.y,
            tempTargetVec.z,
            false
          );
        },
        onStart: () => {
          cameraControlsRef.current.enabled = false;
        },
        onComplete: () => {
          cameraControlsRef.current.enabled = true;
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
      true
    );
  };

  const stopAnimation = () => {
    gsap.killTweensOf(animationProgress.current);
    animationProgress.current.value = 0;
    updateCameraFov();
    moveToStartPoint();
    cameraControlsRef.current.enabled = true;
  };

  const updateCameraFov = () => {
    cameraControlsRef.current.zoomTo(fov);
  };

  useFrame((_, delta) => {
    if (cameraControlsRef.current) {
      cameraControlsRef.current.update(delta);
    }
  });

  // Trigger animation when playAnimation changes
  useEffect(() => {
    if (playAnimation) {
      startAnimation();
    } else {
      stopAnimation();
    }
  }, [playAnimation]);

  return (
    <>
      {/* Render the camera and target curves as Lines in red */}
      {!playAnimation && (
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
