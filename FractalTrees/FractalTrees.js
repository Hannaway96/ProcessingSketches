
var tree = [];
var leaves = [];
var counter = 0;
var wordList = ['Cunt', 'Dick', 'Fanny', 'Balls', 'flaps'];

function setup() {
  createCanvas (400, 400);
  var a = createVector(width/2, height);
  var b = createVector(width/2, height -100);
  var root = new Branch(a, b);

  tree[0] = root;
}

function RandWord(){  
    var x = document.getElementById("Cunt");
    var y = document.getElementById("Balls");    
    
    var num = floor(random(0, 4));
    var str = wordList[num];
    x.innerHTML = str;
        
    num = floor(random(0, 4));
    str = wordList[num];
    y.innerHTML = str;
}


function mousePressed() { 
  RandWord();   
  for (var i = tree.length-1; i >=0; i--) {
    if (!tree[i].finsihed) {
      tree.push(tree[i].branchRight());
      tree.push(tree[i].branchLeft());
    }  
    tree[i].finished = true;
  }
  counter++;

  if (counter === 2) {
    for (var i = 0; i < tree.length; i++) {
      if (!tree[i].finished) {
        var leaf = tree[i].end.copy();
        leaves.push(leaf);
      }
    }
    counter = 0;
  }
}

function draw() {
  background(51);
  for (var i =0; i < tree.length; i++) {
    tree[i].show();
    tree[i].jitter();
  }

  for (var i =0; i < leaves.length; i++) {
    fill(255, 0, 100);
    ellipse(leaves[i].x, leaves[i].y, 8, 8);
  }
}
