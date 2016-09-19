function setup() {
  createCanvas(850, 850);
  background(255);
}

function draw(){
  fill(255);
  ellipse(mouseX,mouseY,80,60);
  ellipse(mouseX-20,mouseY-8,16,10);
  ellipse(mouseX+20,mouseY-8,16,10);
  noFill();
  //ellipse(100,105,40,30);
  arc(mouseX, mouseY+5, 40, 30, 0, PI, PI+QUARTER_PI);

}
