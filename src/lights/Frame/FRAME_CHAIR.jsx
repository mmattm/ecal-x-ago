/* eslint-disable react/prop-types */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 FRAME_CHAIR_02.3.gltf 
*/

import React from "react";
import { useGLTF, PerspectiveCamera } from "@react-three/drei";
import { map } from "../../utils/utils";

import EnhancedSpotlight from "../../EnhancedSpotlight";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/gltf/Frame/FRAME_CHAIR_02.3.gltf");
  const dimmingValue = map(props.dimmingValue, 0, 1, 0, 3);

  return (
    <group {...props} dispose={null}>
      <group position={[0.0, -0, -0.23]}>
        <group position={[0.05, 0.82, 0.23]}>
          <EnhancedSpotlight
            position={[0, 1, 0]}
            castShadow={false}
            scale={0.7}
            attenuation={dimmingValue}
            distance={30}
            opacity={0.3}
            angle={3}
          />
        </group>
        <group position={[0.49, 0.82, 0.23]}>
          <EnhancedSpotlight
            position={[0, 1, 0]}
            castShadow={false}
            scale={0.8}
            attenuation={dimmingValue}
            distance={30}
            opacity={0.3}
            angle={3}
          />
        </group>
        <group position={[-0.4, 0.8, 0.23]}>
          <EnhancedSpotlight
            position={[0, 1, 0]}
            castShadow={false}
            scale={0.8}
            attenuation={dimmingValue}
            distance={30}
            opacity={0.3}
            angle={3}
          />
        </group>
      </group>
      <group scale={1.7}>
        <group scale={0.001}>
          <group
            position={[5804.178, 10.391, -0.724]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0.577}
          >
            <mesh
              CastShadow
              geometry={nodes.AGO_PROBE_FINAL_1.geometry}
              material={materials["Glass Heavy Frost Bright White #1"]}
            />
            <mesh
              CastShadow
              geometry={nodes.AGO_PROBE_FINAL_2.geometry}
              material={materials["Glass Heavy Frost Bright White #1"]}
            />
            <mesh
              CastShadow
              geometry={nodes.AGO_PROBE_FINAL_3.geometry}
              material={materials["Glass Heavy Frost Bright White #1"]}
            />
            <mesh
              CastShadow
              geometry={nodes.AGO_PROBE_FINAL_4.geometry}
              material={materials["HD Black Packing Foam #1"]}
            />
            <mesh
              CastShadow
              geometry={nodes.AGO_PROBE_FINAL_5.geometry}
              material={materials["Paint Matte Black #1"]}
            />
            <mesh
              CastShadow
              geometry={nodes.AGO_PROBE_FINAL_6.geometry}
              material={materials["Paint Matte Black #1"]}
            />
            <mesh
              CastShadow
              geometry={nodes.AGO_PROBE_FINAL_7.geometry}
              material={materials["Paint Matte Black #1"]}
            />
            <mesh
              CastShadow
              geometry={nodes.AGO_PROBE_FINAL_8.geometry}
              material={materials["Paint Matte Black #1"]}
            />
            <mesh
              CastShadow
              geometry={nodes.AGO_PROBE_FINAL_9.geometry}
              material={materials["Paint Matte Black #1"]}
            />
            <mesh
              CastShadow
              geometry={nodes.AGO_PROBE_FINAL_10.geometry}
              material={materials["Paint Matte Black #1"]}
            />
            <mesh
              CastShadow
              geometry={nodes.AGO_PROBE_FINAL_11.geometry}
              material={materials["Paint Matte Black #1"]}
            />
            <mesh
              CastShadow
              geometry={nodes.AGO_PROBE_FINAL_12.geometry}
              material={materials["Paint Matte Black #1"]}
            />
            <mesh
              CastShadow
              geometry={nodes.AGO_PROBE_FINAL_13.geometry}
              material={materials["Paint Matte Black #1"]}
            />
            <mesh
              CastShadow
              geometry={nodes.AGO_PROBE_FINAL_14.geometry}
              material={materials["Paint Matte Black #1"]}
            />
            <mesh
              CastShadow
              geometry={nodes.AGO_PROBE_FINAL_15.geometry}
              material={materials["Paint Matte Black #1"]}
            />
            <mesh
              CastShadow
              geometry={nodes.AGO_PROBE_FINAL_16.geometry}
              material={materials["Paint Matte Black #1"]}
            />
            <mesh
              CastShadow
              geometry={nodes.AGO_PROBE_FINAL_17.geometry}
              material={materials["Paint Matte Black #1"]}
            />
          </group>
          <group
            position={[-149.765, 192.597, -330.195]}
            rotation={[0, -0.335, 0]}
            scale={577.279}
          >
            <group position={[0, -0.33, 0.335]} rotation={[-1.584, 0, 0]}>
              <mesh
                CastShadow
                geometry={nodes["0"].geometry}
                material={materials["Fine Grain Wood #1"]}
              />
              <mesh
                CastShadow
                geometry={nodes["0_1"].geometry}
                material={materials["Fine Grain Wood #1"]}
              />
              <mesh
                CastShadow
                geometry={nodes["0_2"].geometry}
                material={materials["Paint Gloss Black #1"]}
              />
              <mesh
                CastShadow
                geometry={nodes["0_3"].geometry}
                material={materials["Fine Grain Wood #1"]}
              />
              <mesh
                CastShadow
                geometry={nodes["0_4"].geometry}
                material={materials["Fine Grain Wood #1"]}
              />
              <mesh
                CastShadow
                geometry={nodes["0_5"].geometry}
                material={materials["Fine Grain Wood #1"]}
              />
              <mesh
                CastShadow
                geometry={nodes["0_6"].geometry}
                material={materials["Paint Gloss Black #1"]}
              />
              <mesh
                CastShadow
                geometry={nodes["0_7"].geometry}
                material={materials["Fine Grain Wood #1"]}
              />
              <mesh
                CastShadow
                geometry={nodes["0_8"].geometry}
                material={materials["Fine Grain Wood #1"]}
              />
              <mesh
                CastShadow
                geometry={nodes["0_9"].geometry}
                material={materials["Fine Grain Wood #1"]}
              />
              <mesh
                CastShadow
                geometry={nodes["0_10"].geometry}
                material={materials["Fine Grain Wood #1"]}
              />
              <mesh
                CastShadow
                geometry={nodes["0_11"].geometry}
                material={materials["Fine Grain Wood #1"]}
              />
              <mesh
                CastShadow
                geometry={nodes["0_12"].geometry}
                material={materials["Fine Grain Wood #1"]}
              />
            </group>
          </group>
        </group>
      </group>
      <PerspectiveCamera
        makeDefault={false}
        far={3959.99}
        near={2790.656}
        fov={39.598}
        position={[1.278, 0.926, 3.109]}
        rotation={[-0.139, 0.353, 0.048]}
        scale={0.001}
      />
      <PerspectiveCamera
        makeDefault={false}
        far={6136.199}
        near={4866.425}
        fov={39.598}
        position={[-3.579, 1.099, 4.176]}
        rotation={[0, -0.698, 0]}
        scale={0.001}
      />
      <PerspectiveCamera
        makeDefault={false}
        far={5822.672}
        near={5180.755}
        fov={39.598}
        position={[0.035, 1.097, 5.5]}
        scale={0.001}
      />
    </group>
  );
}

useGLTF.preload("/FRAME_CHAIR_02.3.gltf");
