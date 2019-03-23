
let streams = [];
let symbolSize = 18;

function setup() {
    let x = 0
    createCanvas(800, 400);
    for (let i = 0; i <= width / symbolSize; i++) {
        let stream = new Stream(symbolSize);
        stream.generateSymbols(x, random(-500, 0));
        streams.push(stream);
        x+=symbolSize;
    }
}

function draw() {
    background(0, 120);
    /* for (Stream of streams) {
        Stream.show();
    } */
    streams.forEach((stream) => stream.show());
}

