/* eslint-disable react/prop-types */
import { SoftShadows, Sky, Environment, Grid, Stats } from "@react-three/drei";
import CameraPathAnimator from "./CameraPathAnimator";
import { SplatsView } from "./SplatsView";
import { videoMode } from "./config";

import { globalStore, cameraPathsStore } from "./store";

//import { Effect } from "postprocessing";
import { useSceneControls } from "./controls";

export default function Scene({
  splat,
  splatPosition,
  splatRotation,
  splatScale,
}) {
  const { gaussianVisible } = globalStore((state) => state);
  const grid = globalStore((state) => state.grid);
  const sky = globalStore((state) => state.sky);
  const splatAlphaRemovalThreshold = globalStore(
    (state) => state.splatAlphaRemovalThreshold
  );
  const splat3D = globalStore((state) => state.splat3D);

  const cameraPaths = cameraPathsStore((state) => state.cameraPaths);

  const selectedCameraPath = cameraPathsStore(
    (state) => state.selectedCameraPath
  );
  const selectedPath = cameraPaths.find(
    (path) => path.id === selectedCameraPath
  );

  useSceneControls();

  return (
    <>
      {grid && <Grid args={[50, 50]} position={[0, 0, 0]} />}
      {!videoMode && <Stats showPanel={0} className="stats" />}

      {/* <fog attach="fog" args={["white", 0, 40]} /> */}

      <CameraPathAnimator
        points={selectedPath.points}
        loop={true}
        target={selectedPath.target}
        targetPoints={selectedPath.targetPoints}
        duration={selectedPath.duration}
        easing={selectedPath.easing}
      />
      {/* <SoftShadows size={10} samples={16} focus={1} /> */}
      {/* <Environment preset="sunset" /> */}
      {/* <ambientLight intensity={1} /> */}
      {sky && (
        <Sky
          distance={450000}
          sunPosition={[5, 1, 11]}
          inclination={1}
          azimuth={3}
        />
      )}

      {/* Floor */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0, 0]}
        receiveShadow
        renderOrder={1}
      >
        <planeGeometry args={[100, 100]} />
        <shadowMaterial transparent opacity={0.4} />
      </mesh>
      {gaussianVisible && (
        <group
          rotation={splatRotation}
          position={splatPosition}
          scale={splatScale}
        >
          <SplatsView
            key={`${splat3D}-${splatAlphaRemovalThreshold}`}
            sources={[splat]}
            // sources={[
            //   "https://huggingface.co/datasets/runes/coolsplats/resolve/main/output.splat",
            // ]}
            options={[
              {
                splatAlphaRemovalThreshold: splatAlphaRemovalThreshold,
                progressiveLoad: false,
                splat3D: splat3D,
              },
            ]}
          ></SplatsView>
        </group>
      )}
    </>
  );
}
