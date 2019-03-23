class Symbol {
    constructor(x, y, speed, size) {
        this.x = x;
        this.y = y;
        this.value;
        this.size = size;
        this.speed = speed;
        this.interval = floor(random(5, 25));
        this.first;
    }

    setToRandomSymbol() {
        if (frameCount % this.interval == 0) {
            this.value = String.fromCharCode(
                0x30A0 + random(0, 96)
            );
        }
    }

    rain() {
        this.y = (this.y > height) ? 0 : this.y += this.speed;
    }

    show() {
        textSize(this.size);
        if (this.first) {
            fill(180, 255, 180);
        }
        else {
            fill(0, 255, 90);
        }
        text(this.value, this.x, this.y);
        this.rain();
        this.setToRandomSymbol();
    }
}