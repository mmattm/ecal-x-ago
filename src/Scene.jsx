/* eslint-disable react/prop-types */
import { SoftShadows, Sky, Environment, Grid } from "@react-three/drei";
import CameraPathAnimator from "./CameraPathAnimator";
import { SplatsView } from "./SplatsView";

import { globalStore, sceneStore, cameraPathsStore } from "./store";

export default function Scene({ splatPosition }) {
  const { gaussianVisible } = globalStore((state) => state);
  const grid = globalStore((state) => state.grid);

  const { selectedScene } = sceneStore((state) => state);

  const cameraPaths = cameraPathsStore((state) => state.cameraPaths);

  const selectedCameraPath = cameraPathsStore(
    (state) => state.selectedCameraPath
  );
  const selectedPath = cameraPaths.find(
    (path) => path.id === selectedCameraPath
  );

  return (
    <>
      {grid && <Grid args={[50, 50]} position={[0, 0, 0]} />}
      <fog attach="fog" args={["white", 0, 40]} />
      <CameraPathAnimator points={selectedPath.points} loop={true} />
      <SoftShadows size={12} samples={42} focus={1} />
      <Environment preset="sunset" />
      <ambientLight intensity={1} />
      <Sky
        distance={450000}
        sunPosition={[1, 1, 11]}
        inclination={1}
        azimuth={0.25}
      />

      {/* Floor */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0, 0]}
        receiveShadow
        renderOrder={1}
      >
        <planeGeometry args={[100, 100]} />
        <shadowMaterial transparent opacity={0.3} />
      </mesh>
      {gaussianVisible && (
        <group
          rotation={[-Math.PI + 0.1, -Math.PI / 2, 0]}
          // position={[1.5, -0.3, -0.8]}
          scale={5}
        >
          <SplatsView
            sources={["/splats/tank.splat"]}
            // sources={[
            //   "https://huggingface.co/datasets/runes/coolsplats/resolve/main/output.splat",
            // ]}
            options={[
              {
                position: splatPosition,
                scale: [1, 1, 1],
                rotation: [0, 0, 0, 0],
                showLoadingUI: false,
                splatAlphaRemovalThreshold: 100,
                progressiveLoad: false,
              },
            ]}
          ></SplatsView>
        </group>
      )}
    </>
  );
}
