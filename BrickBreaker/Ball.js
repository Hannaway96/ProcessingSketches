class Ball {
    constructor() {
        this.pos = createVector(width / 2, height / 2);
        this.r = 15;
        this.direction = createVector(random(-1, 1), random(-1, 1));
        this.velocity = createVector(1, 1).mult(10);
    }

    move() {
        this.checkEdges();
        this.pos.x += this.velocity.x * this.direction.x;
        this.pos.y += this.velocity.y * this.direction.y;
    }

    meetsPaddle(paddle) {
        if (this.pos.y < paddle.pos.y &&
            this.pos.y > paddle.pos.y - this.r &&
            this.pos.x > paddle.pos.x - this.r &&
            this.pos.x < paddle.pos.x + paddle.w + this.r) {
            return true;
        }
        else {
            return false
        }
    }

    meetsBrick(brick) {
        let distance = dist(this.pos.x, this.pos.y, brick.pos.x, brick.pos.y);
        return (distance < this.r + brick.r) ? true : false;
    }

    checkEdges() {
        if (this.pos.y < this.r && this.direction.y < 0) {
            this.direction.y *= -1;
        }
        else if (this.pos.y > height - this.r && this.direction.y > 0) {
            this.direction.y *= -1;
        }

        if (this.pos.x < this.r && this.direction.x < 0) {
            this.direction.x *= -1;
        }
        else if (this.pos.x > width - this.r && this.direction.x > 0) {
            this.direction.x *= -1;
        }
    }

    show() {
        fill(255, 100, 100);
        ellipse(this.pos.x, this.pos.y, this.r * 2);
    }
}