class Brick {
    constructor(points) {
        this.pos = createVector(random(100, width - 100), random(100, height - 100));
        this.points = points;
        this.r = random(10, 50);
    }

    createPolygon(x, y, radius, points) {

        let angle = TWO_PI / points;
        beginShape();
        for (let i = 0; i < TWO_PI; i += angle) {
            let sx = x + cos(i) * radius;
            let sy = y + sin(i) * radius;
            vertex(sx, sy);
        }
        endShape(CLOSE);
    }

    broke() {
        return (this.r < 10);
    }

    show() {
        fill(255);
        this.createPolygon(this.pos.x, this.pos.y, this.r, this.points);
    }
}