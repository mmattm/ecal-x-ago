/* eslint-disable react/prop-types */
import {
  SoftShadows,
  Sky,
  Environment,
  Grid,
  Stats,
  MeshReflectorMaterial,
} from "@react-three/drei";
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

      {!sky && !gaussianVisible && (
        <>
          <color attach="background" args={["#000"]} />
          <fog attach="fog" args={["#191920", 0, 130]} />
        </>
      )}
      {/* Floor */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0, 0]}
        receiveShadow
        renderOrder={1}
      >
        <planeGeometry args={[400, 400]} />
        <shadowMaterial transparent opacity={!gaussianVisible ? 0.2 : 0.5} />
        {!sky && !gaussianVisible && (
          <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={1024}
            mixBlur={1.5}
            mixStrength={80}
            mixContrast={1}
            roughness={1.5}
            depthScale={1.3}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.6}
            color="#050505"
            metalness={0.7}
          />
        )}
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
