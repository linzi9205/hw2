function setup() {
  createCanvas(850, 850);
  background(200);
}

function draw(){
  strokeWeight(2);
  for(n=50;n<800;n=n+10){
    line(n,50,n,800);
  }
}
