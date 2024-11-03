/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 JOAB_CHARLOTTE_FINAL03.gltf 
*/

import React from "react";
import { useGLTF, PerspectiveCamera } from "@react-three/drei";
import EnhancedSpotlight from "../../EnhancedSpotlight";

export function Model(props) {
  const { nodes, materials } = useGLTF(
    "/src/lights/Planta/JOAB_CHARLOTTE_FINAL03.gltf"
  );
  return (
    <group {...props} dispose={null}>
      <group position={[-9.6, 39, 24.1]}>
        <EnhancedSpotlight
          position={[0, 1, 0]}
          castShadow={false}
          scale={38}
          attenuation={0.7}
          distance={6}
          opacity={1}
          angle={1}
        />
      </group>
      <group scale={0.01}>
        <group position={[1132.62, 1035.436, 4336.4]} scale={10}>
          <group
            position={[-205.9, -98.867, -194.772]}
            rotation={[-Math.PI / 2, 0, 0.652]}
            scale={0.233}
          >
            <mesh
              castShadow
              geometry={nodes.AGO_lampe_suspendue_2_2.geometry}
              material={materials["Glass Heavy Frost Bright White #1"]}
              position={[0, 0, 0.393]}
            />
            <mesh
              castShadow
              geometry={nodes.AGO_lampe_suspendue_3_2.geometry}
              material={materials["Paint Textured Red #1"]}
              position={[0, 0, 0.393]}
            />
            <mesh
              castShadow
              geometry={nodes.AGO_pot_2_2.geometry}
              material={materials["Paint Textured Red #1"]}
            />
            <mesh
              castShadow
              geometry={nodes.AGO_raccord_tube_pot_2_2.geometry}
              material={materials["Paint Textured Red #1"]}
            />
            <mesh
              castShadow
              geometry={nodes.AGO_raccord_tube_pot_3_2.geometry}
              material={materials["Paint Textured Red #1"]}
            />
            <mesh
              castShadow
              geometry={nodes.AGO_Feet_d08_2_2.geometry}
              material={materials["Paint Textured Red #1"]}
            />
            <mesh
              castShadow
              geometry={nodes.AGO_Feet_d08_3_2.geometry}
              material={materials["Paint Textured Red #1"]}
            />
            <mesh
              castShadow
              geometry={nodes.AGO_Feet_d08_4_2.geometry}
              material={materials["Paint Textured Red #1"]}
            />
            <mesh
              castShadow
              geometry={nodes.Tube_2_2.geometry}
              material={materials["Paint Textured Red #1"]}
            />
            <mesh
              castShadow
              geometry={nodes.Vis_FH_M8x30_2_2.geometry}
              material={materials.Matériau_1}
            />
            <mesh
              castShadow
              geometry={nodes.Vis_FH_M8x30_3_2.geometry}
              material={materials.Matériau_1}
            />
          </group>
        </group>
        <group position={[-926.379, 246.848, 2388.681]} scale={75}>
          <mesh
            castShadow
            geometry={nodes.Leaf.geometry}
            material={materials["Alocasia Black Velvet 2 Leaf"]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
        <mesh
          castShadow
          geometry={nodes.Cylinder.geometry}
          material={materials["Soft Rough Black #3"]}
          position={[-928.798, 602.183, 2376.107]}
          scale={[850.865, 568.879, 850.865]}
        />
      </group>
      <PerspectiveCamera
        makeDefault={false}
        far={21836.395}
        near={16115.608}
        fov={13.064}
        position={[-73.915, 146.104, -103.603]}
        rotation={[-2.333, -0.336, -2.77]}
        scale={0.01}
      />
      <PerspectiveCamera
        makeDefault={false}
        far={19201.127}
        near={14367.565}
        fov={26.991}
        position={[133.936, 70.966, 98.288]}
        rotation={[-0.582, 1.012, 0.539]}
        scale={0.01}
      />
    </group>
  );
}

useGLTF.preload("/JOAB_CHARLOTTE_FINAL03.gltf");
