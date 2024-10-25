/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 ALEX_LI.gltf 
*/

import React from "react";
import { useGLTF, PerspectiveCamera } from "@react-three/drei";
import EnhancedSpotlight from "../../EnhancedSpotlight";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/src/lights/Frame/ALEX_LI.gltf");
  return (
    <group {...props} dispose={null}>
      <group position={[0.045, 0.84, 0]}>
        <EnhancedSpotlight
          position={[0, 1, 0]}
          castShadow={false}
          scale={0.8}
          attenuation={3}
          distance={30}
          opacity={0.3}
          angle={3}
        />
      </group>
      <group position={[0.5, 0.84, 0]}>
        <EnhancedSpotlight
          position={[0, 1, 0]}
          castShadow={false}
          scale={0.8}
          attenuation={3}
          distance={30}
          opacity={0.3}
          angle={3}
        />
      </group>
      <group position={[-0.4, 0.84, 0]}>
        <EnhancedSpotlight
          position={[0, 1, 0]}
          castShadow={false}
          scale={0.8}
          attenuation={3}
          distance={30}
          opacity={0.3}
          angle={3}
        />
      </group>
      <group scale={0.001}>
        <group position={[10054.378, 18, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            geometry={nodes.AGO_PROBE_FINAL_1.geometry}
            material={materials["Glass Heavy Frost White #1"]}
          />
          <mesh
            castShadow
            geometry={nodes.AGO_PROBE_FINAL_2.geometry}
            material={materials["Glass Heavy Frost White #1"]}
          />
          <mesh
            castShadow
            geometry={nodes.AGO_PROBE_FINAL_3.geometry}
            material={materials["Glass Heavy Frost White #1"]}
          />
          <mesh
            castShadow
            geometry={nodes.AGO_PROBE_FINAL_4.geometry}
            material={materials["HD Black Packing Foam #1"]}
          />
          <mesh
            castShadow
            geometry={nodes.AGO_PROBE_FINAL_5.geometry}
            material={materials["Paint Matte Black #1"]}
          />
          <mesh
            castShadow
            geometry={nodes.AGO_PROBE_FINAL_6.geometry}
            material={materials["Paint Matte Black #1"]}
          />
          <mesh
            castShadow
            geometry={nodes.AGO_PROBE_FINAL_7.geometry}
            material={materials["Paint Matte Black #1"]}
          />
          <mesh
            castShadow
            geometry={nodes.AGO_PROBE_FINAL_8.geometry}
            material={materials["Paint Matte Black #1"]}
          />
          <mesh
            castShadow
            geometry={nodes.AGO_PROBE_FINAL_9.geometry}
            material={materials["Paint Matte Black #1"]}
          />
          <mesh
            castShadow
            geometry={nodes.AGO_PROBE_FINAL_10.geometry}
            material={materials["Paint Matte Black #1"]}
          />
          <mesh
            castShadow
            geometry={nodes.AGO_PROBE_FINAL_11.geometry}
            material={materials["Paint Matte Black #1"]}
          />
          <mesh
            castShadow
            geometry={nodes.AGO_PROBE_FINAL_12.geometry}
            material={materials["Paint Matte Black #1"]}
          />
          <mesh
            castShadow
            geometry={nodes.AGO_PROBE_FINAL_13.geometry}
            material={materials["Paint Matte Black #1"]}
          />
          <mesh
            castShadow
            geometry={nodes.AGO_PROBE_FINAL_14.geometry}
            material={materials["Paint Matte Black #1"]}
          />
          <mesh
            castShadow
            geometry={nodes.AGO_PROBE_FINAL_15.geometry}
            material={materials["Paint Matte Black #1"]}
          />
          <mesh
            castShadow
            geometry={nodes.AGO_PROBE_FINAL_16.geometry}
            material={materials["Paint Matte Black #1"]}
          />
          <mesh
            castShadow
            geometry={nodes.AGO_PROBE_FINAL_17.geometry}
            material={materials["Paint Matte Black #1"]}
          />
        </group>
        <group position={[-750, 312.7, -330.65]} scale={1000}>
          <group
            position={[0.447, -0.335, -0.017]}
            rotation={[-1.584, 0, -0.482]}
          >
            <mesh
              castShadow
              geometry={nodes["0"].geometry}
              material={materials["Old Wood Planks #1"]}
            />
            <mesh
              castShadow
              geometry={nodes["0_1"].geometry}
              material={materials["Old Wood Planks #1"]}
            />
            <mesh
              castShadow
              geometry={nodes["0_2"].geometry}
              material={materials["Metal Polished Black #1"]}
            />
            <mesh
              castShadow
              geometry={nodes["0_3"].geometry}
              material={materials["Old Wood Planks #1"]}
            />
            <mesh
              castShadow
              geometry={nodes["0_4"].geometry}
              material={materials["Old Wood Planks #1"]}
            />
            <mesh
              castShadow
              geometry={nodes["0_5"].geometry}
              material={materials["Old Wood Planks #1"]}
            />
            <mesh
              castShadow
              geometry={nodes["0_6"].geometry}
              material={materials["Old Wood Planks #1"]}
            />
            <mesh
              castShadow
              geometry={nodes["0_7"].geometry}
              material={materials["Old Wood Planks #1"]}
            />
            <mesh
              castShadow
              geometry={nodes["0_8"].geometry}
              material={materials["Old Wood Planks #1"]}
            />
            <mesh
              castShadow
              geometry={nodes["0_9"].geometry}
              material={materials["Old Wood Planks #1"]}
            />
            <mesh
              castShadow
              geometry={nodes["0_10"].geometry}
              material={materials["Old Wood Planks #1"]}
            />
            <mesh
              castShadow
              geometry={nodes["0_11"].geometry}
              material={materials["Old Wood Planks #1"]}
            />
            <mesh
              castShadow
              geometry={nodes["0_12"].geometry}
              material={materials["Old Wood Planks #1"]}
            />
          </group>
        </group>
      </group>
      <PerspectiveCamera
        makeDefault={false}
        far={7769.249}
        near={5228.985}
        fov={39.598}
        position={[3.657, 2.275, 5.244]}
        rotation={[-0.308, 0.553, 0.166]}
        scale={0.001}
      />
      <PerspectiveCamera
        makeDefault={false}
        far={6601.105}
        near={4401.519}
        fov={39.598}
        position={[-3.579, 1.099, 4.176]}
        rotation={[0, -0.698, 0]}
        scale={0.001}
      />
      <PerspectiveCamera
        makeDefault={false}
        far={6057.698}
        near={4945.729}
        fov={39.598}
        position={[0.035, 1.097, 5.5]}
        scale={0.001}
      />
    </group>
  );
}

useGLTF.preload("/ALEX_LI.gltf");
