/* eslint-disable react/prop-types */
import Scene from "../Scene";
import CustomDirectionalLight from "../CustomDirectionalLight";

const splat = "/splats/outdoor.splat";

export default function SceneContainer() {
  return (
    <>
      <Scene splat={splat} splatPosition={[0, 0, 0]} />

      <group position={[0, 0, 0]}>
        <CustomDirectionalLight position={[1, 20, 5]} intensity={3} />
        <CustomDirectionalLight position={[2, 10, -3]} intensity={1} />
      </group>
    </>
  );
}
