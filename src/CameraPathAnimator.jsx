/* eslint-disable react/prop-types */
import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { CameraControls, Line } from "@react-three/drei";
import gsap from "gsap";
import { CatmullRomCurve3, Vector3 } from "three";
import { useAnimationStore, cameraPathsStore, fovStore } from "./store";

export default function CameraPathAnimator({
  points, // Receiving points from parent
  duration,
  target,
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

  // Define the CatmullRomCurve3 using the passed points from the parent
  const curve = new CatmullRomCurve3(points.map((p) => new Vector3(...p)));

  // Generate 50 interpolated points for smooth curve
  const interpolatedPoints = curve.getPoints(50);

  useEffect(() => {
    stopAnimation();
  }, [selectedCameraPath]);

  // update camera fov
  useEffect(() => {
    //console.log("Updating camera fov to: ", fov);

    if (cameraControlsRef.current) cameraControlsRef.current.zoomTo(fov);
  }, [fov]);

  const startAnimation = () => {
    console.log(easing);

    gsap.fromTo(
      animationProgress.current,
      { value: 0 },
      {
        value: 1,
        duration: duration,
        ease: easing,
        onUpdate: () => {
          // Get the current point along the curve
          curve.getPoint(animationProgress.current.value, tempVec);

          // Use CameraControls to set the camera position and target (lookAt)
          cameraControlsRef.current.setLookAt(
            tempVec.x,
            tempVec.y,
            tempVec.z,
            target[0],
            target[1],
            target[2],
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
    curve.getPoint(0, tempVec);
    cameraControlsRef.current.setLookAt(
      tempVec.x,
      tempVec.y,
      tempVec.z,
      target[0],
      target[1],
      target[2],
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

      // setCameraPosition([
      //   cameraControlsRef.current.object.position.x,
      //   cameraControlsRef.current.object.position.y,
      //   cameraControlsRef.current.object.position.z,
      // ]);
    }
  });

  // Trigger animation when playAnimation changes
  useEffect(() => {
    //console.log("playAnimation changed to: ", playAnimation);

    if (playAnimation) {
      startAnimation();
    } else {
      stopAnimation();
    }
  }, [playAnimation]);

  return (
    <>
      {/* Render the curve as a Line */}
      {!playAnimation && (
        <Line points={interpolatedPoints} color={0x00ffff} lineWidth={1} />
      )}
      {/* Camera controls to animate the camera along the curve */}
      <CameraControls ref={cameraControlsRef} />
    </>
  );
}
