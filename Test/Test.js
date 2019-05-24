
let circles = [];
let hue = 0;

function setup() {
    createCanvas(400, 400);
    background(230, 50, 75);

    for (let y = 25; y < height; y += 50) {
        let circle = {
            x: 25,
            y: y,
            diameter: 50,
            direction: "left"
        };

        if (circles.length % 2 != 0) {
            circle.direction = "right";
            circle.x = width - (circle.diameter / 2);
        }

        circles.push(circle);
    }
}

function draw() {
    for (let circle of circles) {
        hue = map(circle.x, 0, 400, 0, 255);
        fill(hue);
        ellipse(circle.x, circle.y, circle.diameter);

        if (circle.direction === "left") {
            circle.x += 4;
        }
        if (circle.direction === "right") {
            circle.x -= 4;
        }

        if (circle.x + (circle.diameter / 2) > width) {
            circle.direction = "right";
        }
        if (circle.x - (circle.diameter / 2) < 0) {
            circle.direction = "left";
        }
    }
}
