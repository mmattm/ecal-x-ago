/* eslint-disable react/prop-types */

export default function CustomDirectionalLight({ position, intensity }) {
  return (
    <directionalLight
      castShadow
      position={position}
      intensity={intensity}
      shadow-mapSize={1024}
      shadow-bias={0.0005}
    >
      {/* Attach the orthographic shadow camera */}
      <orthographicCamera
        attach="shadow-camera"
        args={[-10, 10, -10, 10, 0.1, 80]} // Keep the frustum size and range the same
      />
    </directionalLight>
  );
}
