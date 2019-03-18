
class Particle {

    constructor() {
        this.x = 300;
        this.y = 380;
        this.velocityX = random(-1, 1);
        this.velocityY = random(-5, -1);
        this.alpha = 255;
        this.colour = random(0,255);
    }


    finished() {
        return this.alpha < 0;
    }

    update() {
        this.x += this.velocityX;
        this.y += this.velocityY;
        this.alpha -= random(1,5);
    }

    show() {
        noStroke();
        fill(colour, 0, 0, this.alpha);
        ellipse(this.x, this.y, 16);
    }
}
