import { useRef, useState, useEffect } from "react";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as GaussianSplats3D from "@mkkellogg/gaussian-splats-3d";

import * as THREE from "three";

// import * as THREE from "three";

import { Canvas, useLoader, extend } from "@react-three/fiber";
import {
  useGLTF,
  OrbitControls,
  Splat,
  Environment,
  SoftShadows,
  Shadow,
  Float,
  Plane,
  Effects,
  Sphere,
} from "@react-three/drei";

import {
  EffectComposer,
  TiltShift2,
  HueSaturation,
  DotScreen,
  DepthOfField,
  Bloom,
  SelectiveBloom,
} from "@react-three/postprocessing";

import FakeGlowMaterial from "./FakeGlowMaterial";

import "./App.css";

// import { SplatTest } from "./splat-object";

function Scene() {
  const lightRef1 = useRef();
  const lightRef2 = useRef();

  const gltf = useLoader(GLTFLoader, "/models/ORIANA_FLAVIA_03.gltf");

  // Traverse the GLTF model and enable shadows
  useEffect(() => {
    if (gltf) {
      gltf.scene.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true; // Enable casting shadows
          child.receiveShadow = true; // Enable receiving shadows (if needed)
        }
      });
    }
  }, [gltf]);

  return (
    <>
      <OrbitControls />
      <SoftShadows size={10} samples={30} focus={2} />

      <directionalLight
        castShadow
        position={[1.5, 8, 5]}
        intensity={2.5}
        shadow-mapSize={1024}
      >
        <orthographicCamera
          attach="shadow-camera"
          args={[-10, 10, -10, 10, 0.1, 50]}
        />
      </directionalLight>
      {/* <orthographicCamera
        attach="shadow-camera"
        args={[-10, 10, -10, 10, 0.1, 50]}
      /> */}
      {/* <ambientLight ref={lightRef2} intensity={2} /> */}
      {/* Transparent Floor with ShadowMaterial */}
      <mesh rotation={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[100, 100]} />
        {/* <shadowMaterial opacity={1} depthWrite={false} /> */}
        <meshStandardMaterial color="white" />
      </mesh>

      <Sphere
        args={[0.1, 128, 128]}
        position={[-0.0, 0.64, 0.01]}
        // castShadow
        // receiveShadow
      >
        {/* <meshPhysicalMaterial color={"blue"} roughness={0.2} /> */}
        <FakeGlowMaterial
          falloff={3}
          glowInternalRadius={2}
          glowColor={"#fff"}
          glowSharpness={4}
          opacity={1.0}
          toneMapped={false}
        />
      </Sphere>
      <Environment preset="city" />
      <primitive object={gltf.scene} position={[0, -0.3, 0]} scale={0.5} />
    </>
  );
}

function App() {
  //use effect on mount
  const refContainer = useRef(null);

  useEffect(() => {
    // console.log("App mounted");

    // const threeScene = new THREE.Scene();
    // const boxColor = 0xbbbbbb;
    // const boxGeometry = new THREE.BoxGeometry(2, 2, 2);
    // const boxMesh = new THREE.Mesh(
    //   boxGeometry,
    //   new THREE.MeshBasicMaterial({ color: boxColor })
    // );
    // boxMesh.position.set(3, 8, 2);
    // threeScene.add(boxMesh);

    // const viewer = new GaussianSplats3D.Viewer({
    //   threeScene: threeScene,
    //   cameraUp: [0, -1, -0.54],
    //   initialCameraPosition: [-3.15634, -0.16946, -0.51552],
    //   initialCameraLookAt: [1.52976, 2.27776, 1.65898],
    //   sphericalHarmonicsDegree: 2,
    //   freeIntermediateSplatData: true,
    //   integerBasedSort: false,
    //   splatSortDistanceMapPrecision: 18,
    // });
    // viewer.addSplatScene("src/assets/garden_high.ksplat").then(() => {
    //   viewer.
    //   viewer.start();
    // });
    const scene = new THREE.Scene();
    const viewer = new GaussianSplats3D.DropInViewer({
      gpuAcceleratedSort: true,
    });
    viewer.addSplatScenes([
      {
        path: "src/assets/garden_high.ksplat",
        rotation: [0, -0.857, -0.514495, 6.123233995736766e-17],
        scale: [1.5, 1.5, 1.5],
        position: [0, -2, -1.2],
      },
    ]);

    var camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    // document.body.appendChild( renderer.domElement );
    // use ref as a mount point of the Three.js scene instead of the document.body
    refContainer.current &&
      refContainer.current.appendChild(renderer.domElement);
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    scene.add(viewer);

    camera.position.z = 5;
    var animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();
  }, []);

  return (
    <div ref={refContainer}></div>

    // <Canvas>
    //   <Scene />
    // </Canvas>
  );
}

export default App;
