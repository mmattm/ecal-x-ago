/* eslint-disable react/prop-types */
import {
  SoftShadows,
  Sky,
  Environment,
  Grid,
  Stats,
  MeshReflectorMaterial,
  Splat,
} from "@react-three/drei";
import CameraPathAnimator from "./CameraPathAnimator";
import { SplatsView } from "./SplatsView";
import { editorMode } from "./config";

import { globalStore, cameraPathsStore } from "./store";

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

  const selectedCameraPathId = cameraPathsStore(
    (state) => state.selectedCameraPathId
  );
  const selectedPath = cameraPaths.find(
    (path) => path.id === selectedCameraPathId
  );

  useSceneControls();

  // const stopAnimation = useAnimationStore((state) => state.stopAnimation);
  // const setSplatsLoaded = globalStore((state) => state.setSplatLoaded);

  // // useEffect mount
  // useEffect(() => {
  //   console.log("Scene mount");
  //   stopAnimation();
  //   setSplatsLoaded(false);
  // }, []);

  return (
    <>
      {grid && editorMode && <Grid args={[50, 50]} position={[0, 0, 0]} />}
      {editorMode && <Stats showPanel={0} className="stats" />}

      {/* <fog attach="fog" args={["white", 0, 40]} /> */}

      <CameraPathAnimator
        points={selectedPath.points}
        target={selectedPath.target}
        targetPoints={selectedPath.targetPoints}
        duration={selectedPath.duration}
        easing={selectedPath.easing}
      />
      {/* <SoftShadows size={10} samples={16} focus={1} /> */}
      {/* <Environment preset="sunset" /> */}
      {/* <ambientLight intensity={1} /> */}
      {sky && (
        <>
          {/* <Sky
          distance={450000}
          sunPosition={[5, 1, 11]}
          inclination={1}
          azimuth={3}
        /> */}
          {/* <color attach="background" args={["#EFECD9"]} /> */}
          <color attach="background" args={["#000000"]} />
        </>
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
        <>
          <group
            rotation={splatRotation}
            position={splatPosition}
            scale={splatScale}
          >
            <SplatsView
              path={splat}
              //key={`${splat3D}-${splatAlphaRemovalThreshold}`}
              // sources={[splat]}
              // sources={[
              //   "https://huggingface.co/datasets/runes/coolsplats/resolve/main/output.splat",
              // ]}
              // options={[
              //   {
              //     // splatAlphaRemovalThreshold: splatAlphaRemovalThreshold,
              //     // progressiveLoad: true,
              //     // splat3D: splat3D,
              //     showLoadingUI: true,
              //     // focalAdjustment: 1,
              //     // selfDrivenMode: false,
              //   },
              // ]}
            ></SplatsView>
          </group>
          {/* <group position={[0, 0, 0]} scale={3}>
            <Splat src={splat} />
          </group> */}
        </>
      )}
    </>
  );
}
