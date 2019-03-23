
let player;
//array to store tiles
let tiles = [];

let rolls = [];
let index = 0;
let averageRolls = 0;

function setup() {
    createCanvas(600, 600);

    player = new Player();

    //set the size of each tile 
    let resolution = 60;
    let cols = width / resolution; //create cols and rows 
    let rows = height / resolution;

    //x and y are pixel locations
    let x = 0;
    let y = (rows - 1) * resolution;//start at bottom left of screen
    let dir = 1;

    for (let i = 0; i < cols * rows; i++) {

        //add all the tiles to the array 
        let tile = new Tile(x, y, resolution, i, i + 1);
        tiles.push(tile);
        x = x + (resolution * dir);

        //if the x is longer than the width of the canvas
        //wrap it around and go backwards
        if (x >= width || x <= -resolution) {
            dir *= -1;
            x += resolution * dir;
            y -= resolution;
        }
    }
}


function draw() {
    background(51);

    for (let tile of tiles) {
        tile.show();
    }

    player.roll();
    rolls[index]++;

    let gameOver = false;
    if (player.spot >= tiles.length - 1) {
        player.spot = tiles.length - 1;
        gameOver = true;
    }

    if (gameOver == true) {
        player.reset();
        index++;
        rolls[index] = 0;
    }

    player.show(tiles);
}
