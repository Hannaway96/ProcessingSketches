class Ball {
    constructor() {
        this.pos = createVector(width / 2, height / 2);
        this.r = 15;
        this.direction = createVector(1, 1);
        this.velocity = createVector(1, 1).mult(10);
    }

    move() {
        this.checkEdges();
        this.pos.x += this.velocity.x * this.direction.x;
        this.pos.y += this.velocity.y * this.direction.y;
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