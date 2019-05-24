class Boundary {

    constructor(x, y, r) {
        this.pos = createVector(x, y);
        this.r = r
        this.direction = p5.Vector.random2D();
    }

    move() {
        this.pos.add(this.direction);
        if (this.pos.x < this.r || this.pos.x > width - this.r) {
            this.direction.x *= -1;
        }
        if (this.pos.y < this.r || this.pos.y > height - this.r) {
            this.direction.y *= -1;
        }
    }

    check(boundaries) {
        for (let other of boundaries) {
            if (this.meet(other)) {
                let tempX = this.direction.x;
                let tempY = this.direction.y;
                this.direction.x = other.direction.x;
                this.direction.y = other.direction.y;
                other.direction.x = tempX;
                other.direction.y = tempY;
            }
        }
    }

    meet(other) {
        let distance = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
        return (distance < this.r + other.r) ? true : false;
    }

    show() {
        strokeWeight(1);
        stroke(255, 50);
        noFill();
        ellipse(this.pos.x, this.pos.y, this.r * 2);
    }
}