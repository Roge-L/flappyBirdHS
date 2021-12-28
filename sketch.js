p5.disableFriendlyErrors = true;

let gameState;
let lightbg, darkbg, ground;
let bird1, bird2, bird3, birdX, birdY;
let pipe, pipeX, PIPEGAP, PIPEWIDTH, PIPESEPARATION, pipes;
let hit;
let GRAVITY;
let SPEED;

class Pipe {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

function preload() {
    lightbg = loadImage("images/lightbg.png");
    darkbg = loadImage("images/darkbg.png");
    ground = loadImage("images/ground.png");

    bird1 = loadImage("images/bird1.png");
    bird2 = loadImage("images/bird2.png");
    bird3 = loadImage("images/bird3.png");

    pipe = loadImage("images/pipe.png")
}

function setup() {
    var cnv = createCanvas(windowWidth, windowHeight);
    cnv.style("display", "block");

    lightbg.resize(0, height);
    darkbg.resize(0, height);

    gameState = "play";

    birdX = width/3;
    birdY = height/2;

    pipeX = width;
    pipesX = [];
    PIPEGAP = 200;
    PIPEWIDTH = 85;
    PIPESEPARATION = 250;

    hit = false;

    GRAVITY = 0.5;
    SPEED = 0;

    collideDebug(true);

    frameRate(60);
}

function draw() {
    // background
    imageMode(CORNER);
    for (i = 0; i < width; i += lightbg.width) {
        image(lightbg, i, 0);
    }

    // basic elements
    fill("green");

    pipes
    var loopNumber = 0;
    for (i = 0; i < width; i += PIPESEPARATION) {
        // for as much space as the width allows, create a corresponding 
        // number of pipes
        pipesX[loopNumber] = pipeX + i;
        loopNumber += 1;
        rect(pipesX[loopNumber], 0, PIPEWIDTH, 100);
    }

    // floor
    for (i = 0; i < width; i += ground.width) {
        image(ground, i, height - ground.height);
    }

    imageMode(CENTER); 
    fill("yellow");
    circle(birdX, birdY, 50);
    image(bird1, birdX, birdY);

    // collision detection
    // hit = (collideRectCircle(pipeX, 0, PIPEWIDTH, height/3, birdX, birdY, 50) || collideRectCircle(pipeX, (height/3) + PIPEGAP, PIPEWIDTH, height - height/3, birdX, birdY, 50))
    // if (hit) {
    //     gameState = "home"
    // } else {
        
    // }

    // core function of the game
    gameCore();
}

function gameCore() {
    // home state
    // play state
    if (gameState == "home") {
        
    } else if (gameState == "play") {
        // bird physics
        SPEED += GRAVITY;
        birdY += SPEED;
   
        // pipe movement
        pipeX -= 5;
        for (i = 0; i < pipesX.length; i ++) {
            if (pipesX[i] <= 0) {
                pipeX = width;
            }
        }
    }
        // pause state
        // game over state
}

function keyPressed() {
    if (key == " ") {
        SPEED = -9;
    }
}