// other easing options: https://greensock.com/docs/v3/Eases
const time = 10;
export const cameraPaths = [
  {
    id: "Oil Tank 1",
    points: [
      [-2.74, 9.84, 6.36], //begin
      [-2.74, 9.84, 6.36], //begin
      //start
      
      [ 1.39, 1.33, 2.98], //2

      [0.58, 1.40, 1.19], //3
      [0.58, 1.40, 1.19], //3

      [4.30, 1.61, 0.69], //4
      [4.30, 1.61, 0.69], //4

      [1.71,0.17,-0.94], //5
      [1.71,0.17,-0.94], //5

      [2.31, 0.39, 1.34], //6 Green

      [2.51, 0.39, 1.34], //7 Yellow

      [2.11, 0.50, 1.26], //8 Blue

      [ 0.13, 0.13, 1.01], //9 Blue
      [ 0.13, 0.1, 1.01], //9 Blue

      [-0.68,1.08,2.24], //10 Yellow 2

      [-2.85, 1.73, -0.44], //11 Yellow 2
      [-2.85, 1.73, -0.44], //11 Yellow 2

      [-1.13,1.02,-0.47], //12 Yellow 2
      [-1.13,1.02,-0.47], //12 Yellow 2

      [-1.28,0.46,-0], //13 Yellow 2
      [-1.28,0.46,-0], //13 Yellow 2

      [0.51,10.01,-0.06], //14 dark

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
      [0.77,2.81,-0.46], //13 Yellow 2

      [0.77,2.81,-0.46], //14 dark

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
      [-31.77,14.15,39.59], //begin
      [-31.77,14.15,39.59], //begin
      //start
      [-8.78,6.53,0.02], //1

      [0.47,0.83,1.06], //2
      [0.97,0.13,2.91], //2

      [1.59,0.18,3.79], //3

      [2.26,0.18,3.06], //4

      [0.83,-0.02,1.67], //5
      [1.00,-0.01,0.69], //5

      [2.21,0.34,-4.32], //6

      [-0.46,0.50,-4.66], //7
      [-0.46,0.50,-4.66], //7

      [-1.24,0.38,-3.42], //8

      [-0.03,0.66,-0.94], //9
      [-1.22,0.26,1.21], //9

      [-1.14,0.11,2.51], //10
      [-0.51,0.61,2.06], //10

      [-0.94,0.16,2.35], //10.5

      [0.19,0.60,4.57], //11
      [0.19,0.60,4.57], //11

      [-11.71,13.21,-4.89], //12
      [-11.71,13.21,-4.89], //12

      [-43.01,38.03,9.28], //13

      //end
      [-31.77,14.15,39.59], //end
      [-31.77,14.15,39.59], //end
    ],
    // target: [1, 1, 0],
    targetPoints: [
      [1.35,0.93,3.47], //begin
      [1.35,0.93,3.47], //begin
      //start
      [1.35,0.93,3.47], //1

      [2.15,0.46,3.98], //2
      [2.15,0.66,3.98], //2

      [3.46,1.19,2.62], //3

      [3.46,1.19,2.62], //4

      [2.64,1.07,0.81], //5
      [2.64,1.07,0.81], //5

      [2.52,0.93,0.85], //6

      [1.68,1.10,0.57], //7
      [1.68,1.10,0.57], //7

      [2.24,0.91,2.75], //8 Center 

      [0.78,0.78,0.30], //9
      [0.78,0.78,0.30], //9

      [-0.10, 0.75,1.80], //10
      [-0.10,1.00,1.80], //10

      [0.30,0.66,3.62], //10.5

      [0.30,0.9,3.62], //11
      [0.30,0.9,3.62], //11

      [2.24,0.91,2.75], //12 Center
      [2.24,0.91,2.75], //12 Center

      [2.24,0.91,2.75], //13 Center


      //end
      [1.35,0.93,3.47], //end
      [1.35,0.93,3.47], //end
    ],
    fov: 2,
    duration: time,
    easing: "power1.inOut",
  },
  {
    id: "Younhyoun Matterial Library 1",
    points: [
      [329.82,22.30,36.83], //start
      [329.82,22.30,36.83], //start
      //start

      [50.32,6.28,1.35], //0 wide

      [20.56,3.85,-1.35], //0.5
      [20.56,3.85,-1.35], //0.5

      [4.70,2.07,-1.40], //1 room
      [4.70,2.07,-1.40], //1 room

      [-2.18,0.31,7.04], //3 close up left
      [-2.18,0.31,7.04], //3 close up left

      [-9.17,3.63,-2.08], //5 right
      [-9.17,3.63,-2.08], //5 right

      [-15.78,2.53,-1.97], //6 Entrée cuisine

      [-25.22,2.33,-5.12], //7 Fond droit bar

      [-17.27,1.72,-11.20], //8 Fond gauche bar
      [-17.27,1.72,-11.20], //8 Fond gauche bar

      [-7.90,2.21,0.45], //9 right

      [0.28,3.79,5.14], //10

      [-1.60,4.02,0.96], //11 frontal

      [-5.53,1.87,3.84], //12 frontal close-up light
      [-5.53,1.87,3.84], //12 frontal close-up light

      [11.22,3.35,-19.67], //13 frontal back right
      [14.83,3.35,-13.85], //13 frontal back left

      [3.04,1.80,15.57], //15 outside street
      [3.04,1.80,15.57], //15 outside street

      [31.82,2.36,48.65], //16 very outside street
      [31.82,2.36,48.65], //16 very outside street

      [81.26,40.76,-3.31], //17 overview top
      [81.26,40.76,-3.31], //17 overview top

      //end
      [329.82,22.30,36.83], //end
      [329.82,22.30,36.83], //end
    ],
    // target: [2, 1, 0.5],
    targetPoints: [
      [-7.09,1.49,4.73], //start
      [-7.09,1.49,4.73], //start
      //start

      [-7.09,1.49,4.73], //0 light center

      [-7.09,1.49,4.73], //0.5 light center
      [-7.09,1.49,4.73], //0.5 light center
      
      [-7.09,1.49,4.73], //1 light center
      [-7.09,1.49,4.73], //1 light center

      [-8.03,3.03,3.49], //3 Top right
      [-5.57,2.7,5.97], //3 Top left

      [-8.03,2.5,3.49], //5 Top right
      [-5.57,2.5,5.97], //5 Top left

      [-8.03,2.9,3.49], //6 Top right

      [-8.03,2.7,3.49], //7 Top right

      [-8.03,3.03,3.49], //8 Top right
      [-8.03,3.03,3.49], //8 Top right

      [-6.68,-0.01,4.98], //9 Milieu coussin

      [-6.68,-0.01,4.98], //10 Milieu coussin

      [-6.65,2.82,4.60], //11 Milieu light

      [-6.65,2.82,4.60], //12 Milieu light
      [-6.65,2.82,4.60], //12 Milieu light

      [-6.65,2.82,4.60], //13 Milieu coussin  
      [-6.65,2.82,4.60], //13 Milieu coussin

      [-7.09,1.49,4.73], //15 light center
      [-7.09,1.49,4.73], //15 light center

      [-7.09,1.49,4.73], //16 light center
      [-7.09,1.49,4.73], //16 light center

      [-7.09,1.49,4.73], //17 light center
      [-7.09,1.49,4.73], //17 light center

      //end
      [-7.09,1.49,4.73], //end
      [-7.09,1.49,4.73], //end
    ],
    fov: 3,
    duration: time,
    easing: "none",
  },
  {
    id: "Post Archive Faction 1",
    points: [
      [4.55,2.38,27.75], //start
      [4.55,2.38,27.75], //start
      //start

      [4.21,2.47,6.60], //0 Between clothes
      [4.21,2.47,6.60], //0 Between clothes

      [2.55,2.19,9.07], //1 Snake left
      [2.55,2.19,9.07], //1 Snake left

      //end
      [4.55,2.38,27.75], //end
      [4.55,2.38,27.75], //end
    ],
    // target: [2, 1, 0.5],
    targetPoints: [
      [0.55,2.42,4.62], //start Center Snake
      [0.55,2.42,4.62], //start Center Snake
      //start

      [0.55,2.42,4.62], //start Center Snake
      [0.55,2.42,4.62], //start Center Snake

      //end
      [0.55,2.42,4.62], //end Center Snake
      [0.55,2.42,4.62], //end Center Snake
    ],
    fov: 3,
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
