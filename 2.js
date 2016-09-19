function setup() {
  createCanvas(200, 200);
  background(255);
}

function draw(){
  for(n=10;n<190;n=n+10){
    line(n,n,n+10,n);
  }
}
