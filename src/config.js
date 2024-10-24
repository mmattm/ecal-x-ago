// other easing options: https://greensock.com/docs/v3/Eases
const time = 20;

export const videoMode = false;

export const cameraPaths = [
  {
    id: "Oil Tank 1",
    points: [
      [-2.74, 9.84, 6.36], //begin
      [-2.74, 9.84, 6.36], //begin
      //start

      [1.39, 1.33, 2.98], //2

      [0.58, 1.4, 1.19], //3
      [0.58, 1.4, 1.19], //3

      [4.3, 1.61, 0.69], //4
      [4.3, 1.61, 0.69], //4

      [1.71, 0.17, -0.94], //5
      [1.71, 0.17, -0.94], //5

      [2.31, 0.39, 1.34], //6 Green

      [2.51, 0.39, 1.34], //7 Yellow

      [2.11, 0.5, 1.26], //8 Blue

      [0.13, 0.13, 1.01], //9 Blue
      [0.13, 0.1, 1.01], //9 Blue

      [-0.68, 1.08, 2.24], //10 Yellow 2

      [-2.85, 1.73, -0.44], //11 Yellow 2
      [-2.85, 1.73, -0.44], //11 Yellow 2

      [-1.13, 1.02, -0.47], //12 Yellow 2
      [-1.13, 1.02, -0.47], //12 Yellow 2

      [-1.28, 0.46, -0], //13 Yellow 2
      [-1.28, 0.46, -0], //13 Yellow 2

      [0.51, 10.01, -0.06], //14 dark

      //end
      [-2.74, 9.84, 6.36], //end
      [-2.74, 9.84, 6.36], //end
    ],
    // target: [1, 1, 0],
    targetPoints: [
      [0.8, 0.7, 0], //begin
      [0.8, 0.7, 0], //begin
      //start
      [0.8, 0.3, 0], //2

      [0.8, 0.5, 0], //3
      [0.8, 0.5, 0], //3

      [0.8, 0.7, 0], //4
      [0.8, 0.7, 0], //4

      [0.8, 0.7, 0], //5
      [0.8, 0.7, 0], //5

      [0.8, 0.9, 0], //6 Yellow

      [1.6, 0.7, 0.95], //7 Yellow
      [1.6, 0.7, 0.95], //7 Yellow

      [-0.4, 0.5, 0.7], //8 Blue

      [-0.4, 0.8, 0.7], //9 Blue
      [-0.4, 0.3, 0.7], //9 Blue

      [-0.8, 0.5, -0.7], //10 Yellow 2

      [-0.8, 0.5, -0.7], //11 Yellow 2
      [-0.8, 0.5, -0.7], //11 Yellow 2

      [-0.8, 0.9, -0.7], //12 Yellow 2
      [-0.8, 0.8, -0.7], //12 Yellow 2

      [-0.8, 0.75, -0.7], //13 Yellow 2
      [0.77, 2.81, -0.46], //13 Yellow 2

      [0.77, 2.81, -0.46], //14 dark

      //end
      [0.8, 0.7, 0], //end
      [0.8, 0.7, 0], //end
    ],
    fov: 2,
    duration: time,
    easing: "power1.inOut",
  },
  {
    id: "Swiss Embacy 1",
    points: [
      [-31.77, 14.15, 39.59], //begin
      [-31.77, 14.15, 39.59], //begin
      //start
      [-8.78, 6.53, 0.02], //1

      [0.47, 0.83, 1.06], //2
      [0.97, 0.13, 2.91], //2

      [1.59, 0.18, 3.79], //3

      [2.26, 0.18, 3.06], //4

      [0.83, -0.02, 1.67], //5
      [1.0, -0.01, 0.69], //5

      [2.21, 0.34, -4.32], //6

      [-0.46, 0.5, -4.66], //7
      [-0.46, 0.5, -4.66], //7

      [-1.24, 0.38, -3.42], //8

      [-0.03, 0.66, -0.94], //9
      [-1.22, 0.26, 1.21], //9

      [-1.14, 0.11, 2.51], //10
      [-0.82,0.36,2.21], //10.5

      [-0.82,0.36,2.21], //10.5

      [0.19, 0.6, 4.57], //11
      [0.19, 0.6, 4.57], //11

      [-11.71, 13.21, -4.89], //12
      [-11.71, 13.21, -4.89], //12

      [-43.01, 38.03, 9.28], //13

      //end
      [-31.77, 14.15, 39.59], //end
      [-31.77, 14.15, 39.59], //end
    ],
    // target: [1, 1, 0],
    targetPoints: [
      [1.35, 0.93, 3.47], //begin
      [1.35, 0.93, 3.47], //begin
      //start
      [1.35, 0.93, 3.47], //1

      [2.15, 0.46, 3.98], //2
      [2.15, 0.66, 3.98], //2

      [3.46, 1, 2.62], //3

      [3.46, 1, 2.62], //4

      [2.64, 0.85, 0.81], //5
      [2.64, 0.85, 0.81], //5

      [2.52, 0.93, 0.85], //6

      [1.68, 1.1, 0.57], //7
      [1.68, 1.1, 0.57], //7

      [2.24, 0.91, 2.75], //8 Center

      [0.78, 0.78, 0.3], //9
      [0.78, 0.78, 0.3], //9

      [-0.1, 0.75, 1.8], //10
      [-0.1, 1.0, 1.8], //10

      [0.3, 0.86, 3.62], //10.5

      [0.3, 0.86, 3.62], //11
      [0.3, 0.86, 3.62], //11

      [2.24, 0.91, 2.75], //12 Center
      [2.24, 0.91, 2.75], //12 Center

      [2.24, 0.91, 2.75], //13 Center

      //end
      [1.35, 0.93, 3.47], //end
      [1.35, 0.93, 3.47], //end
    ],
    fov: 2,
    duration: time,
    easing: "power1.inOut",
  },
  {
    id: "Younhyoun Matterial Library 1",
    points: [
      [329.82, 22.3, 36.83], //start
      [329.82, 22.3, 36.83], //start
      //start

      [50.32, 7.28, 1.35], //0 wide

      [20.56, 4.85, -1.35], //0.5
      [20.56, 4.85, -1.35], //0.5

      [4.7, 3.07, -1.4], //1 room
      [4.7, 3.07, -1.4], //1 room

      [-2.18, 1.31, 7.04], //3 close up left
      [-2.18, 1.31, 7.04], //3 close up left

      [-9.17, 4.63, -2.08], //5 right
      [-9.17, 4.63, -2.08], //5 right

      [-15.78, 3.53, -1.97], //6 Entrée cuisine

      [-26.09,3.46,-2.71], //7 Fond droit bar

      [-17.27, 3.32, -11.2], //8 Fond gauche bar
      [-17.27, 3.32, -11.2], //8 Fond gauche bar

      [-7.9, 3.21, 0.45], //9 right

      [0.28, 4.79, 5.14], //10

      [-1.6, 5.02, 0.96], //11 frontal

      [-4.29,1.90,3.25], //12 frontal close-up light
      [-4.29,1.90,3.25], //12 frontal close-up light

      [11.22, 4.35, -19.67], //13 frontal back right
      [14.83, 4.35, -13.85], //13 frontal back left

      [3.04, 2.8, 15.57], //15 outside street
      [3.04, 2.8, 15.57], //15 outside street
      [7.31,2.31,30.81], //15.5 outside street

      [31.82, 3.36, 48.65], //16 very outside street
      [31.82, 3.36, 48.65], //16 very outside street

      [81.26, 40.76, -3.31], //17 overview top
      [81.26, 40.76, -3.31], //17 overview top

      //end
      [329.82, 22.3, 36.83], //end
      [329.82, 22.3, 36.83], //end
    ],
    // target: [2, 1, 0.5],
    targetPoints: [
      [-7.09, 1.49, 4.73], //start
      [-7.09, 1.49, 4.73], //start
      //start

      [-7.09, 2.49, 4.73], //0 light center

      [-7.09, 2.49, 4.73], //0.5 light center
      [-7.09, 2.49, 4.73], //0.5 light center

      [-7.09, 2.3  , 4.73], //1 light center
      [-7.09, 2.3, 4.73], //1 light center

      [-7.10,3.2,3.47], //3 Top right
      [-5.57, 3.2, 5.97], //3 Top left

      [-7.10,3.64,3.47], //5 Top right
      [-1.35,3.50,8.45], //5 Center other

      [-8.03, 3.5, 3.49], //6 Top right

      [-8.03, 3.5, 3.49], //7 Top right

      [-8.03, 3.7, 3.49], //8 Top right
      [-1.35,3.50,8.45], //8 Center other

      [-6.68, -0.3, 4.98], //9 Milieu coussin

      [-6.68, -0.3, 4.98], //10 Milieu coussin

      [-6.14,3.56,4.59], //11 Milieu light

      [-6.14,3.56,4.59], //12 Milieu light
      [-6.14,3.56,4.59], //12 Milieu light

      [-6.14,3.86,4.59], //13 Milieu coussin
      [-6.14,3.86,4.59], //13 Milieu coussin

      [-7.09, 2.49, 4.73], //15 light center
      [-7.09, 2.49, 4.73], //15 light center
      [-7.09, 2.49, 4.73], //15 light center

      [-7.09, 2.49, 4.73], //16 light center
      [-7.09, 2.49, 4.73], //16 light center

      [-7.09, 2.49, 4.73], //17 light center
      [-7.09, 2.49, 4.73], //17 light center

      //end
      [-7.09, 1.49, 4.73], //end
      [-7.09, 1.49, 4.73], //end
    ],
    fov: 2,
    duration: time,
    easing: "none",
  },
  {
    id: "Simulghwan Botanic Garden",
    points: [
      [-13.10,2.60,-29.25], //start
      [-13.10,2.60,-29.25], //start
      //start

      [-1.52,0.37,-0.25], //1 plante1 close-up
      [-1.78,0.04,0.45], //1 plante1 close-up

      [-1.55,2.36,1.12], //2 plante1 close-up top
      [-1.55,2.36,1.12], //2 plante1 close-up top

      [-2.31,1.24,3.96], //3 plante1 side medium
      [-1.86,1.49,4.64], //3 plante1 & 2 medium

      [-0.88,1.09,2.75], //4 plante1 with leafs of 2
      [-0.80,0.67,2.73], //4 plante1 with leafs of 2

      [-0.79,0.18,2.23], //5
      [-0.79,0.18,2.23], //5

      [1.28,0.25,2.07], //6 Contre plongée plante 2
      [1.28,0.25,2.07], //6 Contre plongée plante 2

      [2.96,1.89,-3.81], //7 Back 3 plants shot 
      [2.96,1.89,-3.81], //7 Back 3 plants shot 

      [8.23,1.86,-9.45], //8
      [8.23,1.86,-9.45], //8

      [11.19,1.89,-6.57], //9

      //end
      [-6.39,4.26,9.15], //Wide back
      [-6.39,4.26,9.15], //Wide back

      [-37.85,-39.08,23.51], //Wide under
      [-37.85,-39.08,23.51], //Wide under

      [-13.10,2.60,-29.25], //end
      [-13.10,2.60,-29.25], //end
    ],
    // target: [2, 1, 0.5],
    targetPoints: [
      [-0.57,1.09,2.21], //Plante1 center
      [-0.57,1.09,2.21], //Plante1 center
      //start

      [-0.57,1.09,2.21], //1 Plante1 center
      [-0.57,1.09,2.21], //1 Plante1 center

      [0.27,1.09,1.91], //2 Plante1 center
      [0.27,1.09,1.91], //2 Plante1 center

      [-0.57,1.09,2.21], //3 Plante1 center
      [-0.15,0.77,0.82], //3 Plante2 center

      [-0.15,0.77,0.82], //4 Plante2 center
      [-0.15,0.77,0.82], //4 Plante2 center

      [-0.15,0.77,0.82], //5 Plante2 center
      [-0.15,0.77,0.82], //5 Plante2 center

      [-0.15,0.77,0.82], //6 Plante2 center
      [-0.16, 0.9,0.84], //6 Plante2 top

      [-0.57,1.09,2.21], //7 Plante1 center
      [-0.57,1.09,2.21], //7 Plante1 center

      [1.33,0.93,0.71], //8 scene center
      [1.33,0.93,0.71], //8 scene center

      [1.33,0.93,0.71], //9 scene center
      [1.33,0.93,0.71], //9 scene center

      //end
      [-0.15,0.77,0.82], //Plante2 center
      [-0.15,0.77,0.82], //Plante2 center

      [-0.15,0.77,0.82], //Plante2 center
      [-0.15,0.77,0.82], //Plante2 center

      [-0.57,1.09,2.21], //Plante1 center
      [-0.57,1.09,2.21], //Plante1 center
    ],
    fov: 2,
    duration: time,
    easing: "none",
  },
  {
    id: "Post Archive Faction 1",
    points: [
      [4.39,2.38,26.82], //start
      [4.39,2.38,26.82], //start
      //start

      [4.21, 2.47, 6.6], //0 Between clothes
      [2.26,2.49,6.02], //1 Snake left

      [2.33,0.42,6.52], //2 Snake left

      [2.80,2.80,2.53], //3 Snake left

      [1.41,2.99,1.76], //5 Snake left

      [1.59,1.64,1.84], //6 Snake left

      [-1.71,1.86,0.29], //7
      [-1.33,2.51,3.67], //7

      [-0.48,2.73,8.01], //6.5

      [0.08,1.97,6.39], //9

      [-2.56,3.21,-0.11], //10

      [-1.54,2.38,-1.76], //11

      [-0.45,0.53,2.11], //12
      [-0.45,0.53,2.11], //12

      [5.56,0.56,0.84], //13
      [5.56,0.56,0.84], //13

      [4.97,2.40,-1.85], //14

      [1.15,2.01,-2.03], //15

      [2.27,3.20,-20.66], //16

      [15.68,4.64,20.38], //17
      [15.68,4.64,20.38], //17

      [-28.71,55.64,125.97], //18


      //end
      [4.39,2.38,26.82], //end
      [4.39,2.38,26.82], //end
    ],
    // target: [2, 1, 0.5],
    targetPoints: [
      [0.55, 2.42, 4.62], //start Center Snake
      [0.55, 2.42, 4.62], //start Center Snake
      //start

      [0.62,2.84,5.58], //0 Top left Snake
      [0.62,2.84,5.58], //1 Top left Snake

      [0.59,2.03,5.11], //2 Bottom left Snake

      [0.57,3.10,4.39], //3 Top middle Snake

      [0.56,2.81,3.20], //5 Top right Snake

      [0.62,2.02,3.15], //6 Bottom right Snake

      [0.62,2.02,3.15], //7 Bottom right Snake
      [0.57,1.95,-0.86], //7 Center Off

      [0.57,1.95,-0.86], //6.5 Center Snake


      [0.57,1.95,-0.86], //9 Center Off

      [0.50,2.02,-1.19], //10 Light Off

      [0.51,1.10,0.12], //11 Bottom tip Off

      [0.51,1.10,0.12], //12 Bottom tip Off
      [0.50,2.02,-1.19], //12 Light Off

      [0.50,2.02,-1.19], //13 Light Off
      [0.51,1.10,0.12], //13 Bottom tip Off

      [0.57,3.10,4.39], //14 Top middle Snake

      [0.57,3.10,4.39], //15 Top middle Snake

      [0.57,3.10,4.39], //16 Top middle Snake

      [0.57,3.10,4.39], //17 Top middle Snake
      [0.57,3.10,4.39], //17 Top middle Snake

      [0.57,3.10,4.39], //18 Top middle Snake

      //end
      [0.55, 2.42, 4.62], //end Center Snake
      [0.55, 2.42, 4.62], //end Center Snake
    ],
    fov: 2,
    duration: time,
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
