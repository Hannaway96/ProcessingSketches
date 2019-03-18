function Branch(begin, end){

  this.begin = begin;
  this.end = end;
  this.finished = false;
  
  this.jitter = function(){
    this.end.x += random(-1, 1);
    this.end.y += random(-1, 1);
  }
  
  this.branchRight = function(){ 
    var direction = p5.Vector.sub(this.end, this.begin);
    direction.rotate(PI/4);
    direction.mult(0.67);
    var newEnd = p5.Vector.add(this.end, direction);   
    var right = new Branch(this.end, newEnd);
    return right;
  }
  
  this.branchLeft = function(){   
    var direction = p5.Vector.sub(this.end, this.begin);
    direction.rotate(-PI/4);
    direction.mult(0.67);
    var newEnd = p5.Vector.add(this.end, direction);   
    var left = new Branch(this.end, newEnd);
    return left;
  }
  
  this.show = function(){
  stroke(255);
  line(this.begin.x, this.begin.y, this.end.x, this.end.y);
  }
}
