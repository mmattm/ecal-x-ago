/* eslint-disable react/prop-types */
import Scene from "../Scene";
import CustomDirectionalLight from "../CustomDirectionalLight";

import Planta from "../lights/Planta/Planta";

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

        <Planta position={[0, 0, 0]} scale={0.03} rotation={[0, 0, 0]} />
      </group>
    </>
  );
}
