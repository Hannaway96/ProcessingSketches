let particles = [];

function setup() {
    createCanvas(600, 400);
}


function draw() {
    background(51);

    for (let i = 0; i < 5; i++) {
        let p = new Particle();
        particles.push(p);
    }
    
    for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].show();
        particles[i].update();

        if (particles[i].finished()) {
            particles.splice(i, 1);
        }
    }
    /* for each (Particle in particles) {
        p.update();
        p.show();
    } */
}


