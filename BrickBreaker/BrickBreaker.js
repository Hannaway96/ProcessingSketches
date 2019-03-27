
let ball;
let bricks = [];
let brick;
let paddle;

function setup() {
    createCanvas(600, 600);
    ball = new Ball();
    //brick = new Brick(6);
    paddle = new Paddle();
}

function draw() {
    background(51, 220);
    paddle.show();
    ball.show();
    ball.move();
    paddle.move();
    //brick.show();
}

function keyPressed() {
    if (key === 'a' || key === 'A') {
        paddle.isMovingLeft = true;
    }
    if (key === 'd' || key === 'D') {
        paddle.isMovingRight = true;
    }
}

function keyReleased() {
    paddle.isMovingLeft = false;
    paddle.isMovingRight = false;
}
