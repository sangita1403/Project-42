var sec 
var secAngle

var min
var minAngle

var hr
var hrAngle

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  
}

function draw() {
  background(255,255,255); 
  fill("green");
  text("The getaway clock", 150,20);
  text("Time left to escape: "+(23-hr)+":"+(59-min)+":"+(59-sec),100,380);

  sec = second ();
  min = minute ();
  hr = hour ();
  translate(200,200);
  rotate(-90);
  angleMode(DEGREES);
  secAngle = map(sec,0,60,0,360);
  minAngle = map(min,0,60,0,360);
  hrAngle = map (hr%12,0,12,360);

  // draw seconds hand
  push();
  rotate(secAngle);
  stroke(255,0,0);
  strokeWeight(6);
  line(0,0,100,0);
  pop();

  // draw minutes hand
  push();
  rotate(minAngle);
  stroke(14,232,15);
  strokeWeight(6);
  line(0,0,75,0);
  pop();

  // draw hours hand
  push();
  rotate(hrAngle);
  stroke(6,1,233);
  strokeWeight(6);
  line(0,0,50,0);
  pop();

  drawSprites();
}