import * as THREE from "three";
import React, { useState, useEffect } from "react";
import * as GaussianSplats3D from "@mkkellogg/gaussian-splats-3d";

import { globalStore, useAnimationStore } from "./store";

export function SplatsView({
  path,
  sources,
  options,
}: {
  path: string;
  sources: Array<string>;
  options?: { splat3D?: boolean }[];
}) {
  const [scene] = useState(() => new THREE.Scene());
  const splat3D = globalStore((state) => state.splat3D);
  const setSplatLoaded = globalStore((state) => state.setSplatLoaded);
  const splatLoaded = globalStore((state) => state.splatLoaded);

  const startAnimation = useAnimationStore((state) => state.startAnimation);
  const stopAnimation = useAnimationStore((state) => state.stopAnimation);

  useEffect(() => {
    if (splatLoaded) {
      console.log("Splat scenes loaded successfully");
      startAnimation();
    }
  }, [splatLoaded]);

  useEffect(() => {
    //console.log("Creating splats viewer with sources:", sources);
    setSplatLoaded(false);
    //stopAnimation();

    console.log("Creating splats viewer with path:", path);

    const viewer = new GaussianSplats3D.DropInViewer({
      sceneFadeInRateMultiplier: 0.5,
      gpuAcceleratedSort: false,
      // inMemoryCompressionLevel: 2,
      // gpuAcceleratedSort: true,
      // sharedMemoryForWorkers: true,
      // gpuAcceleratedSort: true,
      // antialiased: true,
      // freeIntermediateSplatData: true,
      // sharedMemoryForWorkers: false,
      // integerBasedSort: false,
      // sceneRevealMode: GaussianSplats3D.SceneRevealMode.Gradual,
      // dynamicScene: true,
      // sharedMemoryForWorkers: true,
      // enableOptionalEffects: false,
      // renderMode: GaussianSplats3D.RenderMode.Never,
      // sceneRevealMode: GaussianSplats3D.SceneRevealMode.Gradual,
      // sceneFadeInRateMultiplier: 0.5,
      // selfDrivenMode: false,
      // splatRenderMode: splat3D
      //   ? GaussianSplats3D.SplatRenderMode.ThreeD
      //   : GaussianSplats3D.SplatRenderMode.TwoD,
      // splatRenderMode: GaussianSplats3D.SplatRenderMode.ThreeD,
      // sharedMemoryForWorkers: false,
      // format: GaussianSplats3D.SceneFormat.Ply,
      // gpuAcceleratedSort: false,
      //splatRenderMode: GaussianSplats3D.SplatRenderMode.TwoD,
      // renderMode: GaussianSplats3D.RenderMode.OnChange,
    });

    // const addParams: Array<any> = sources.map(
    //   (source: string, index: number) => {
    //     const params: any = {
    //       path: source,
    //     };
    //     Object.assign(
    //       params,
    //       options && options.length > index ? options[index] : {}
    //     );
    //     return params;
    //   }
    // );

    const viewerGroup = new THREE.Group();
    viewerGroup.add(viewer as any);
    scene.add(viewerGroup);

    viewer
      .addSplatScene(path, {
        progressiveLoad: false,
        showLoadingUI: false,
        // splatAlphaRemovalThreshold: 100,
      })
      .then(() => {
        setSplatLoaded(true);
        console.log(viewer.viewer);
        viewer.viewer.splatRenderMode = GaussianSplats3D.SplatRenderMode.TwoD;
      })
      .catch((err) => {
        console.log("Error loading splat scenes:", err);
      });

    return () => {
      viewer.dispose().catch((err) => {
        console.log("Error disposing of splats viewer:", err);
      });
    };
  }, [splat3D]);

  return <primitive object={scene} />;
}

// export default function Page() {
//   const splatURL =
//     "https://huggingface.co/datasets/runes/coolsplats/resolve/main/output.splat";

//   return (
//     <div>
//       <SplatsView sources={[splatURL]} />
//     </div>
//   );
// }
