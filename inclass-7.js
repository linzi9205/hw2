function setup() {
  createCanvas(850, 850);
  background(255);
}

function draw(){
  var h=random(360);
  var n = random(10,80);
  var x=random(850);
  var y=random(850);
  noStroke();
  colorMode(HSB)
  fill(h,100,100);
  ellipse(x,y,n,n);
}
