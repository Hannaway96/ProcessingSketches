let boundaries = [];
let ray;
let glow = [];

function setup() {
    createCanvas(600, 600);

    while (boundaries.length < 10) {
        let r = random(10, 50);
        let x = random(0, width - r);
        let y = random(0, height - r);

        if (checkSpawn(x, y, r)) {
            continue;
        }
        let b = new Boundary(x, y, r);
        boundaries.push(b);
    }
    ray = new Ray(width / 2, height / 2, 0);
}

function draw() {
    background(0);
    for (let boundary of boundaries) {
        boundary.check(boundaries);
        boundary.move();
        boundary.show();
    }

    ray.march(boundaries);
    ray.rotate(0.01);
}

function checkSpawn(x, y, r) {
    for (let boundary of boundaries) {
        let distance = dist(boundary.pos.x, boundary.pos.y, x, y);
        return (distance < r + boundary.r) ? true : false;
    }
}

function signedDistance(a, b, r) {
    const d = p5.Vector.dist(a, b);
    return d - r;
}
