// other easing options: https://greensock.com/docs/v3/Eases

export const cameraPaths = [
  {
    id: "path1",
    points: [
      [-3, 2, 1],
      [2, 2, 0],
      [1, 1, 3],
      [3, 2, 2],
      [-3, 2, 1],
    ],
    target: [1, 1, 0],
    fov: 2,
    duration: 16,
    easing: "power1.inOut",
  },
  {
    id: "path2",
    points: [
      [3, 2, 1],
      [3, 2, 0],
      [3, 1, 3],
      [2, 2, 2],
      [3, 2, 1],
    ],
    target: [2, 1, 0.5],
    fov: 3,
    duration: 12,
    easing: "none",
  },
];

export const scenes = [
  { label: "scene 01", value: "scene_01" },
  { label: "scene 02", value: "scene_02" },
];
