/* eslint-disable react/prop-types */
import Scene from "../Scene";
import CustomDirectionalLight from "../CustomDirectionalLight"; // Import the new component
import Yellow from "../lights/Upper/Yellow";
import Green from "../lights/Upper/Green";
import Blue from "../lights/Upper/Blue";

const splat = "/splats/tank.splat";

export default function SceneContainer() {
  return (
    <>
      <Scene
        splat={splat}
        splatPosition={[0.5, -0.29, -1]}
        splatRotation={[-Math.PI + 0.1, -Math.PI / 2, 0]}
        splatScale={5}
      />

      <group position={[0, 0, 0]}>
        <CustomDirectionalLight position={[1, 20, 5]} intensity={3} />
        <CustomDirectionalLight position={[2, 10, -3]} intensity={1} />

        <Yellow position={[0, 0, 0]} scale={0.5} />
        <Green position={[1, 0, 1]} scale={0.5} />
        <Blue position={[-1, 0, 1]} scale={0.5} />
        <Yellow position={[0.25, 0, 2.5]} scale={0.5} />
      </group>
    </>
  );
}
