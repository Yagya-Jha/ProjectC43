var hour,minute,second;
var scangle;
var sh;
function setup() {
  createCanvas(800,400);
  sc = second();
  scangle = map(sc,0,60,0,360);
  mn = minute();
  mnangle = map(mn,0,60,0,360);
  hr = hour();
  hrangle = map(hr,0,60,0,360);
}

function draw() {
  background(0);
  angleMode(DEGREES);

  push();
  translate(400,200);
  stroke(255,0,0);
  strokeWeight(7);
  fill(0);
  arc(0, 0, 270, 270, -90, scangle+270);
  pop();

  push();
  translate(400,200);
  stroke(0,255,0);
  strokeWeight(7);
  fill(0);
  arc(0, 0, 250, 250, -90, mnangle+270);
  pop();

  push();
  translate(400,200);
  stroke(0,0,255);
  strokeWeight(7);
  fill(0);
  arc(0, 0, 230, 230, -90, hrangle+300);
  pop();
  
  sc = second();
  scangle = map(sc,0,60,0,360);
  push();
  translate(400,200);
  rotate(scangle+180);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,10,100);
  pop();

  mn = minute();
  mnangle = map(mn,0,60,0,360);
  push();
  translate(400,200);
  rotate(mnangle+180);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,10,75);
  pop();

  hr = hour();
  hrangle = map(hr%12,0,12,0,360);
  push();
  translate(400,200);
  rotate(hrangle+210);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,10,50);
  pop();

  drawSprites();
}