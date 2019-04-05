
let ball;
let bricks = [];
let brick;
let paddle;

function setup() {
    createCanvas(600, 600);
    ball = new Ball();

    for (let i = 0; i < 10; i++) {
        brick = new Brick(floor(random(4, 7)));
        bricks.push(brick);
    }

    paddle = new Paddle();
}

function draw() {
    background(51, 220);
    paddle.move();
    paddle.show();
    ball.show();
    ball.move();

    for (Brick of bricks) {
        Brick.show();
    }

    checkCollisions();
}

function checkCollisions() {

    if (ball.meetsPaddle(paddle) && ball.direction.y > 0) {
        ball.direction.y *= -1;
    }

    for (brick of bricks) {
        if (ball.meetsBrick(brick)) {
            ball.direction.y *= -1;
            ball.direction.x *= -1;
            brick.r /= 2;
        }
    }

    for (let i = 0; i < bricks.length; i++) {
        if (bricks[i].broke()) {
            bricks.splice(i, 1);
        }
    }
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
