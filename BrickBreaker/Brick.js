class Brick {
    constructor(points) {
        this.x = width / 2 + 200;
        this.y = height / 2;
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
        endShape();
    }


    show() {
        fill(255);
        this.createPolygon(this.x, this.y, this.r, this.points);
    }
}