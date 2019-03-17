
//Program to draw mathematical rose patterns
// Polar equation is:
// r = cos(kθ)
// OR can be a "pair of cartesian parametric equations"
// x = cos(kθ)cos(θ)
// y = cos(kθ)sin(θ)
// Ref https://en.wikipedia.org/wiki/Rose_(mathematics)

var denominator = 8;
var numerator = 5;
var sliderD;
var sliderN;

function setup() {
    createCanvas(500, 500);
    sliderD = createSlider(1, 10, 5, abs(0.02));
    sliderN = createSlider(1, 10, 5, abs(0.02));
}

function draw() {
    denominator = sliderD.value();
    numerator = sliderN.value();
    var k = numerator/denominator;  //K is constant for how many petals there are in the rose
    background(51);
    translate(width/2, height/2);

    beginShape();
    stroke(255);
    noFill();
    strokeWeight(1);
    for(var a = 0; a < TWO_PI * denominator; a += 0.02){
        
        var r = 200 * cos(k*a);
        var x = r * cos(a);
        var y = r * sin(a);
        vertex(x, y);
    }
    endShape(CLOSE);

    text("D:" + denominator, 20, 550);
    text("N:" + numerator, 40, 550);
    
}
