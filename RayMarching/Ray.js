class Ray {
    constructor(x, y, angle) {
        this.pos = createVector(x, y);
        this.angle = angle;
    }

    rotate(offset){
        this.angle += offset;
    }

    march(boundaries) {
        let current = this.pos.copy();
        while (true) {
            let record = Infinity;
            let closest = null;
            for (let boundary of boundaries) {
                let d = signedDistance(current, boundary.pos, boundary.r);
                if (d < record) {
                    record = d;
                    closest = boundary;
                }
            }

            if (record < 1) {
                glow.push(current);
                break;
            }

            const v = p5.Vector.fromAngle(this.angle);
            v.setMag(record);
            strokeWeight(1);
            push();
            stroke(50, 200, 100);
            noFill();
            translate(current.x, current.y);
            ellipse(0, 0, record * 2);
            pop();
            current.add(v);

            if (OffScreen(current)) {
                break;
            }
        }

        strokeWeight(3);
        stroke(200, 50, 100);
        line(this.pos.x, this.pos.y, current.x, current.y);
    }
}

function OffScreen(v) {
    return (v.x < 0 || v.x > width || v.y < 0 || v.y > height);
}