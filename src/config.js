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
    // target: [1, 1, 0],
    targetPoints: [
      [1, 1, 0],
      [-1, 1, 1],
      [-1, 2, 1],
    ],
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
    // target: [2, 1, 0.5],
    targetPoints: [
      [1, 1, 0],
      [-1, 1, 1],
    ],
    fov: 3,
    duration: 12,
    easing: "none",
  },
];

export const scenes = [
  { label: "Oil Tank", value: "OilTank" },
  { label: "Post Archive Faction", value: "PostArchiveFaction" },
  { label: "Simulghwan Botanic Garden", value: "SimulghwanBotanicGarden" },
  { label: "Swiss Embassy Outside", value: "SwissEmbassyOutside" },
  { label: "Younhyoun Material Library", value: "YounhyounMaterialLibrary" },
];
