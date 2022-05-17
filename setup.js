 
 //game variables
const gameOverSound = new Audio("../assets/sounds/gameover.mp3");
const music = new Audio("../assets/sounds/music.mp3");
      music.loop = true;
      music.volume = 0.5;
const debugModeIsOn = true;
const startKey = "s";
const restartKey = "r";
const hitboxColor = "#00FF02";
const destructionXPosition = -1000;
const spawnXPosition = canvas.width * 1.2
let gameState = "menu"; // menu, action or gameover

console.log("GameState:", gameState);

// bird variables
const birdImage = new Image(120, 120);
      birdImage.src = "../assets/images/engel.png";
const birdStartYPosition = 250;
const birdStartYSpeed = 0;
const birdStartYAccelleration = 0;
const birdBeginningYAccelleration = 0.7;
const birdXPosition = 250;
const birdHitboxRadius = 30;
const birdFlapSound = new Audio("../assets/sounds/flap.wav");
const birdFlapForce = -12;
const birdFlapKey = " ";
let birdYSpeed = birdStartYSpeed;
let birdYAccelleration = birdStartYAccelleration;
let birdYPosition = birdStartYPosition;
let birdCanFlap = false;


// score variables
const scoreImage = new Image(100, 100);
      scoreImage.src = "../assets/images/sjæl.png";
const scoreImageXPosition = 70;
const scoreImageYPosition = 70;
const scoreTextXPosition = 100;
const scoreTextYPosition = 90;
const scoreTextSize = 50;
const scoreTextColor = "orange";
let scoreValue = 0;

// cloud variables
const cloudImage = new Image(200, 200);
      cloudImage.src = "../assets/images/fire.png";
const cloudSpawnInterval = 10000; // milliseconds
const cloudXSpeed = -.7;
let cloudTimeSinceLastSpawn = 0; // milliseconds
let clouds = [
    {
        xPosition: canvas.width,
        yPosition: randomBetween(0, canvas.height/2), 
    },
    {
        xPosition: canvas.width -500,
        yPosition: randomBetween(0, canvas.height/2), 
    },
    {
        xPosition: canvas.width-1000,
        yPosition: randomBetween(0, canvas.height/2), 
    },
];

// fireball variables
let fireballImage = new Image(275, 275);
      fireballImage.src = "../assets/images/satan.png";
let fireballXSpeed = -5.5;
let fireballHitboxRadius = 100;
let fireballSpawnInterval = 2000;
let fireballTimeSinceLastSpawn = fireballSpawnInterval;
let fireballs = [];

// coin variables
const coinSound = new Audio("../assets/sounds/coin.wav");
const coinImage = scoreImage;
const coinHitboxRadius = 30;
const coinXSpeed = -5;
let coinSpawnInterval = 1000;
const coinValue = 1;
let coinTimeSinceLastSpawn = coinSpawnInterval;
let coins = [];

// diamond variables
const diamondSound = coinSound;
const diamondImage = new Image (120, 120);
diamondImage.src = "../assets/images/dogghost.png";
const diamondHitboxRadius = 30;
const diamondXSpeed = -5;
const diamondSpawnInterval = 1000;
const diamondValue = 5;
let diamondXPosition = canvas.width;
let diamondYPosition = randomBetween(0, canvas.height);
let diamondTimeSinceLastSpawn = coinSpawnInterval;
let diamonds = [];

//backround
const backgroundimage = new Image(1920, 1080);
      backgroundimage.src = "../assets/images/hell.jpeg";
const backgroundXposition = canvas.width/2;
const backgroundYposition = canvas.height/2;

// menu text variables
const menuFirstText = "Press " + startKey + " to start";
const menuTextXPosition = 300;
const menuTextYPosition = 400; 
const menuSecondText = "Press space to flap wings";
const menuTextSize = 60;
const menuTextColor = "orange";
const gameOverText = "Press " + restartKey + " to restart";