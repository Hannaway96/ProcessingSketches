class Tile {

    constructor(x, y, wh, index, next) {
        this.x = x;
        this.y = y;
        this.wh = wh;
        this.index = index;
        this.next = next;

        if (this.index % 2 == 0) {
            this.colour = 255;
        }
        else {
            this.colour = 100;
        }
    }

    getCenter() {
        let cx = this.x + this.wh / 2;
        let cy = this.y + this.wh / 2;
        return [cx, cy];
    }

    show() {
        fill(this.colour);
        rect(this.x, this.y, this.wh, this.wh);
        fill(255);
        textSize(32);
        //text(this.index + '->' + this.next, this.x, this.y + this.wh);
    }
}