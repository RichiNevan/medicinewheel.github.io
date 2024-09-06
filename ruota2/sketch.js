let inv; let pri; let est; let aut;
let angle1 = 270;
let angle2 = 0;
let angle3 = 90;
let angle4 = 180;
let r = 250; let speed = 0.5
let r1 = 64
let x1; let y1;
let ar = "Ar";
let elements = ["AR", "FOGO", "AGUA", "TERRA"]
let angleStep;


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  background(150, 170, 140);
  textAlign(CENTER);
  textSize(10)
  textFont("Georgia")
  
 
  angleStep = 180 / (ar.length + 25)
}

function draw() {
  translate(width/2, height/2)
  stroke(0); strokeWeight(3)
  

  
  fill(80);
  let aut = arc(0, 0, 500, 500, angle1, angle2);
  fill(230, 10, 10);
  let est = arc(0, 0, 500, 500, angle2, angle3);
  fill(230, 210, 0);
  let pri = arc(0, 0, 500, 500, angle3, angle4);
  fill(240)
  let inv = arc(0, 0, 500, 500, angle4, angle1);

  strokeWeight(2)
  circle(0, 0, 30)
  noFill()
  circle(0, 0, 150)
  circle(0, 0, 180)
  circle(0, 0, 210)

  drawTextOnArc(elements[0], angle4, 45)
  drawTextOnArc(elements[1], angle3, 40)
  drawTextOnArc(elements[2], angle2, 35)
  drawTextOnArc(elements[3], angle1, 37)
  

  //angle1 += speed; angle2 += speed; angle3 += speed; angle4 += speed;
}

function drawTextOnArc (str, startAngle, adj) {
  for (let i=0; i<str.length; i++) {
    let theta = startAngle + i * angleStep + adj;

    x1 = r1 * cos(theta)
    y1 = r1 * sin(theta)
    
    push();
    translate(x1, y1);
    rotate(theta + 90);
    text(str[i], 0, 0);
    pop()
  }
}
