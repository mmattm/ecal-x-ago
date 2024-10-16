/* eslint-disable react/prop-types */
import Scene from "../Scene";
import CustomDirectionalLight from "../CustomDirectionalLight"; // Import the new component
import MozziBar from "../lights/MozziBar/MozziBar";
import Quilt from "../lights/Quilt/Quilt";

const splat = "/splats/tank.splat";

export default function Scene01() {
  return (
    <>
      <Scene
        splat={splat}
        splatPosition={[0.5, -0.4, -1]}
        splatRotation={[-Math.PI + 0.1, -Math.PI / 2, 0]}
        splatScale={5}
      />

      <group position={[0, 0, 0]}>
        <CustomDirectionalLight position={[1, 20, 5]} intensity={3} />
        <CustomDirectionalLight position={[2, 10, -3]} intensity={1} />

        <MozziBar position={[0, 0, 0]} scale={0.5} />
        {/* <Quilt position={[0, 0, 0]} scale={0.5} /> */}
      </group>
    </>
  );
}
