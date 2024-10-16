import * as THREE from "three";
import React, { useState, useEffect } from "react";
import * as GaussianSplats3D from "@mkkellogg/gaussian-splats-3d";

export function SplatsView({
  sources,
  options,
}: {
  sources: Array<string>;
  options?: { splat3D?: boolean }[];
}) {
  const [scene] = useState(() => new THREE.Scene());

  useEffect(() => {
    console.log("Creating splats viewer with sources:", sources);

    const viewer = new GaussianSplats3D.DropInViewer({
      sceneRevealMode: GaussianSplats3D.SceneRevealMode.Instant,
      // sceneFadeInRateMultiplier: 0.1,
      splatRenderMode:
        options && options[0]?.splat3D
          ? GaussianSplats3D.SplatRenderMode.ThreeD
          : GaussianSplats3D.SplatRenderMode.TwoD,

      // splatRenderMode: GaussianSplats3D.SplatRenderMode.ThreeD,
      // sharedMemoryForWorkers: false,
      // format: GaussianSplats3D.SceneFormat.Ply,
      // gpuAcceleratedSort: false,
      // splatRenderMode: GaussianSplats3D.SplatRenderMode.TwoD,
      // renderMode: GaussianSplats3D.RenderMode.OnChange,
    });

    const addParams: Array<any> = sources.map(
      (source: string, index: number) => {
        const params: any = {
          path: source,
        };
        Object.assign(
          params,
          options && options.length > index ? options[index] : {}
        );
        return params;
      }
    );

    const viewerGroup = new THREE.Group();
    viewerGroup.add(viewer as any);
    scene.add(viewerGroup);

    viewer
      .addSplatScenes(addParams, false)
      .then(() => {
        console.log("Splat scenes loaded successfully");
      })
      .catch((err) => {
        console.log("Error loading splat scenes:", err);
      });

    return () => {
      viewer.dispose().catch((err) => {
        console.log("Error disposing of splats viewer:", err);
      });
    };
  }, []);

  return <primitive object={scene} />;
}

export default function Page() {
  const splatURL =
    "https://huggingface.co/datasets/runes/coolsplats/resolve/main/output.splat";

  return (
    <div>
      <SplatsView sources={[splatURL]} />
    </div>
  );
}
