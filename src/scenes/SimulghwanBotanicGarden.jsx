/* eslint-disable react/prop-types */
import Scene from "../Scene";
import CustomDirectionalLight from "../CustomDirectionalLight";

import { Model as Planta1 } from "../lights/Planta/JOAB_CHARLOTTE.jsx";
import { Model as Planta2 } from "../lights/Planta/JOAB_CHARLOTTE_02.jsx";

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

      <group position={[0, 0, 0]}>
        <CustomDirectionalLight position={[1, 20, 5]} intensity={3} />
        <CustomDirectionalLight position={[2, 10, -3]} intensity={1} />

        <group>
          <Planta1 position={[0, 0, 0]} scale={0.03} />
          <Planta2 position={[-1, 0, 2.3]} scale={0.03} rotation={[0, 2, 0]} />
          <Planta2 position={[1, 0, -1]} scale={0.03} rotation={[0, 1, 0]} />
        </group>
        {/* <Planta position={[-0.5, 0, 0.5]} scale={0.03} rotation={[0, 0, 0]} /> */}
      </group>
    </>
  );
}
