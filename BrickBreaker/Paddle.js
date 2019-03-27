class Paddle {
    constructor() {
        this.pos = createVector(width / 2, height - 40);
        this.w = 160;
        this.h = 20;
        this.isMovingRight = false;
        this.isMovingLeft = false;
    }

    move() {
        if (this.isMovingLeft && this.pos.x > 0) {
            this.pos.x -= 10;
        }
        if (this.isMovingRight && this.pos.x < width - this.w) {
            this.pos.x += 10;
        }
    }

    show() {
        fill(0, 230, 70);
        rect(this.pos.x, this.pos.y, this.w, this.h);
    }
}