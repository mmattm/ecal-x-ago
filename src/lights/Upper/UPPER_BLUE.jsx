/* eslint-disable react/prop-types */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 UPPER_BLUE.gltf 
*/

import React from "react";
import { useGLTF, PerspectiveCamera } from "@react-three/drei";
import FakeGlowMaterial from "../../FakeGlowMaterial";
import { Sphere } from "@react-three/drei";
import { map } from "../../utils/utils";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/gltf/Upper/UPPER_BLUE.gltf");

  const dimmingValue = map(props.dimmingValue, 0, 1, 8, 2.75);

  return (
    <group {...props} dispose={null}>
      <Sphere args={[1.5, 32, 32]} position={[0, 1.9, 0.01]} renderOrder={1}>
        <FakeGlowMaterial
          falloff={dimmingValue}
          glowInternalRadius={12}
          glowColor={"#fff"}
          depthTest={false}
        />
      </Sphere>

      <group scale={0.001}>
        <mesh
          castShadow
          geometry={
            nodes[
              "UserssebaDesktopASSISTANT2023-2024S2AGO_Seoul_HighlightSELECTED_STUDENTS3D_Filesagoorianaflaviaobj"
            ].geometry
          }
          material={materials["Rubber #1"]}
        />
        <mesh
          castShadow
          geometry={
            nodes[
              "UserssebaDesktopASSISTANT2023-2024S2AGO_Seoul_HighlightSELECTED_STUDENTS3D_Filesagoorianaflaviaobj_1"
            ].geometry
          }
          material={materials["Rubber #1"]}
        />
        <mesh
          castShadow
          geometry={
            nodes[
              "UserssebaDesktopASSISTANT2023-2024S2AGO_Seoul_HighlightSELECTED_STUDENTS3D_Filesagoorianaflaviaobj_2"
            ].geometry
          }
          material={materials["Paint Textured Yellow #1"]}
        />
        <mesh
          castShadow
          geometry={
            nodes[
              "UserssebaDesktopASSISTANT2023-2024S2AGO_Seoul_HighlightSELECTED_STUDENTS3D_Filesagoorianaflaviaobj_3"
            ].geometry
          }
          material={materials["Emissive Neutral #1"]}
        />
        <mesh
          castShadow
          geometry={
            nodes[
              "UserssebaDesktopASSISTANT2023-2024S2AGO_Seoul_HighlightSELECTED_STUDENTS3D_Filesagoorianaflaviaobj_4"
            ].geometry
          }
          material={materials["Paint Textured Yellow #1"]}
        />
        <mesh
          castShadow
          geometry={
            nodes[
              "UserssebaDesktopASSISTANT2023-2024S2AGO_Seoul_HighlightSELECTED_STUDENTS3D_Filesagoorianaflaviaobj_5"
            ].geometry
          }
          material={materials["Paint Textured Yellow #1"]}
        />
        <mesh
          castShadow
          geometry={
            nodes[
              "UserssebaDesktopASSISTANT2023-2024S2AGO_Seoul_HighlightSELECTED_STUDENTS3D_Filesagoorianaflaviaobj_6"
            ].geometry
          }
          material={materials["Rubber #1"]}
        />
        <mesh
          castShadow
          geometry={
            nodes[
              "UserssebaDesktopASSISTANT2023-2024S2AGO_Seoul_HighlightSELECTED_STUDENTS3D_Filesagoorianaflaviaobj_7"
            ].geometry
          }
          material={materials["Paint Textured Yellow #1"]}
        />
        <mesh
          castShadow
          geometry={
            nodes[
              "UserssebaDesktopASSISTANT2023-2024S2AGO_Seoul_HighlightSELECTED_STUDENTS3D_Filesagoorianaflaviaobj_8"
            ].geometry
          }
          material={materials["Paint Textured Yellow #1"]}
        />
        <mesh
          castShadow
          geometry={
            nodes[
              "UserssebaDesktopASSISTANT2023-2024S2AGO_Seoul_HighlightSELECTED_STUDENTS3D_Filesagoorianaflaviaobj_9"
            ].geometry
          }
          material={materials["Paint Textured Yellow #1"]}
        />
        <mesh
          castShadow
          geometry={
            nodes[
              "UserssebaDesktopASSISTANT2023-2024S2AGO_Seoul_HighlightSELECTED_STUDENTS3D_Filesagoorianaflaviaobj_10"
            ].geometry
          }
          material={materials["Paint Textured Yellow #1"]}
        />
        <mesh
          castShadow
          geometry={
            nodes[
              "UserssebaDesktopASSISTANT2023-2024S2AGO_Seoul_HighlightSELECTED_STUDENTS3D_Filesagoorianaflaviaobj_11"
            ].geometry
          }
          material={materials["Paint Textured Yellow #1"]}
        />
        <mesh
          castShadow
          geometry={
            nodes[
              "UserssebaDesktopASSISTANT2023-2024S2AGO_Seoul_HighlightSELECTED_STUDENTS3D_Filesagoorianaflaviaobj_12"
            ].geometry
          }
          material={materials["Paint Textured Yellow #1"]}
        />
        <mesh
          castShadow
          geometry={
            nodes[
              "UserssebaDesktopASSISTANT2023-2024S2AGO_Seoul_HighlightSELECTED_STUDENTS3D_Filesagoorianaflaviaobj_13"
            ].geometry
          }
          material={materials["Paint Textured Yellow #1"]}
        />
        <mesh
          castShadow
          geometry={
            nodes[
              "UserssebaDesktopASSISTANT2023-2024S2AGO_Seoul_HighlightSELECTED_STUDENTS3D_Filesagoorianaflaviaobj_14"
            ].geometry
          }
          material={materials["Paint Textured Yellow #1"]}
        />
        <mesh
          castShadow
          geometry={
            nodes[
              "UserssebaDesktopASSISTANT2023-2024S2AGO_Seoul_HighlightSELECTED_STUDENTS3D_Filesagoorianaflaviaobj_15"
            ].geometry
          }
          material={materials["Paint Textured Yellow #1"]}
        />
      </group>
      <PerspectiveCamera
        makeDefault={false}
        far={9688.154}
        near={4796.897}
        fov={39.598}
        position={[-2.363, 2.699, 4.681]}
        rotation={[-0.36, -0.565, -0.199]}
        scale={0.001}
      />
    </group>
  );
}

useGLTF.preload("/UPPER_BLUE.gltf");
