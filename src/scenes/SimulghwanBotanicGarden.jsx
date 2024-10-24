/* eslint-disable react/prop-types */
import Scene from "../Scene";
import CustomDirectionalLight from "../CustomDirectionalLight";
import { Environment, SoftShadows } from "@react-three/drei";

import { Model as Planta1 } from "../lights/Planta/JOAB_CHARLOTTE_FINAL01.jsx";
import { Model as Planta2 } from "../lights/Planta/JOAB_CHARLOTTE_FINAL02.jsx";
import { Model as Planta3 } from "../lights/Planta/JOAB_CHARLOTTE_FINAL03.jsx";
import { Model as Planta4 } from "../lights/Planta/JOAB_CHARLOTTE_FINAL04.jsx";

const splat = "/splats/SimulgwanPHbotanicalGarden.splat";

export default function SceneContainer() {
  return (
    <>
      <Scene
        splat={splat}
        splatPosition={[1, -1.36, -11]}
        splatScale={4}
        splatRotation={[3.205, 0, 0.009]}
      />

      <Environment preset="forest" environmentIntensity={1} />
      <ambientLight intensity={0.3} />
      <SoftShadows size={20} samples={18} focus={1} />

      <group position={[0, 0, 0]}>
        <CustomDirectionalLight position={[1, 30, 5]} intensity={1} />
        <CustomDirectionalLight position={[2, 30, -3]} intensity={1} />

        <group>
          <Planta4 position={[-0.6, 0, -0.25]} scale={0.03} />
          <Planta2
            position={[-0.5, 0, 1.9]}
            scale={0.03}
            rotation={[0, 2, 0]}
          />
          <Planta3 position={[1, 0, -1]} scale={0.03} rotation={[0, 1, 0]} />
        </group>
        {/* <Planta position={[-0.5, 0, 0.5]} scale={0.03} rotation={[0, 0, 0]} /> */}
      </group>
    </>
  );
}
