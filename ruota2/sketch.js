new p5()

let offsetX = windowWidth/2;
let offsetY = windowHeight/2;
let zoom = 1.0;
let dragStartX; let dragStartY;
let angle1 = 0;
let angle2 = 90;
let angle3 = 180;
let angle4 = 270;
let speed = 0.2
let r1 = 64
let r2 = 79
let r3 = 94
let r4 = 109
let r5 = 135
let rm = 250  //Radius of moons
let x1; let y1;
let elements = ["AR", "FOGO", "AGUA", "TERRA"]
let seasons = ["INVERNO", "PRIMAVERA", "VERAO", "OUTONO"]
let bodies = ["CORPO MENTAL", "CORPO ESPIRITUAL", "CORPO EMOCIONAL", "CORPO FISICO"]
let realms = ["REINO ANIMAL", "REINO ESPIRITUAL", "REINO EMOCIONAL", "REINO MINERAL"]
let spirits = ["WABOOSE", "WABUN", "SHAWNODESE", "MUDJEKEEWIS"]

//Defining function to map angle degrees to days of the year
function getDegrees(day) {
  let angle = map(day, 0, 365, 0, 360)
  return angle
}

let moon1 = getDegrees(15);
let moon2 = getDegrees(40); 
let moon3 = getDegrees(70); 
let moon4 = getDegrees(99); 
let moon5 = getDegrees(128);
let moon6 = getDegrees(158); 
let moon7 = getDegrees(187);
let moon8 = getDegrees(217);
let moon9 = getDegrees(246); 
let moon10 = getDegrees(276); 
let moon11 = getDegrees(314); 
let moon12 = getDegrees(336); 


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  
  textAlign(CENTER);
  textFont("Georgia")


  //This is an idea of zoom buttons to replace the mouse wheel.. if necessary 
  /*zoomIn = createButton("+")
  zoomIn.position(width/5, height/7)
  zoomOut = createButton(" - ")
  zoomOut.position(width/5, (height/7)+30)*/
}



function draw() {
  background(150, 170, 140);
  translate(offsetX, offsetY)
  rotate(270)
  stroke(0); strokeWeight(3)
  scale(zoom)
  
  //Wheel's colored sections
  fill(80);
  let aut = arc(0, 0, 500, 500, angle1, angle2);
  fill(230, 10, 10);
  let est = arc(0, 0, 500, 500, angle2, angle3);
  fill(230, 210, 0);
  let pri = arc(0, 0, 500, 500, angle3, angle4);
  fill(225)
  let inv = arc(0, 0, 500, 500, angle4, angle1);

  // Concentric circles
  strokeWeight(2)
  circle(0, 0, 30)
  noFill()
  circle(0, 0, 150)
  circle(0, 0, 180)
  circle(0, 0, 210)
  circle(0, 0, 240)
  
  //Text on the Wheel
  textSize(10)
  strokeWeight(0.7)
  drawTextOnArc(elements[0], r1, angle4, 7, 45)
  drawTextOnArc(elements[1], r1, angle3, 7, 40)
  drawTextOnArc(elements[2], r1, angle2, 7, 30)
  drawTextOnArc(seasons[0], r2, angle4, 6, 30)
  drawTextOnArc(seasons[1], r2, angle3, 6, 22)
  drawTextOnArc(seasons[2], r2, angle2, 6, 30)
  drawTextOnArc(bodies[0], r3, angle4, 5, 16)
  drawTextOnArc(bodies[1], r3, angle3, 4, 16)
  drawTextOnArc(bodies[2], r3, angle2, 5, 10)
  drawTextOnArc(realms[0], r4, angle4, 5, 16)
  drawTextOnArc(realms[1], r4, angle3, 4, 16)
  drawTextOnArc(realms[2], r4, angle2, 5, 9)
  fill(255)
  drawTextOnArc(elements[3], r1, angle1, 7, 34)
  drawTextOnArc(seasons[3], r2, angle1, 7, 30)
  drawTextOnArc(bodies[3], r3, angle1, 5, 19)
  drawTextOnArc(realms[3], r4, angle1, 5, 16)
  textSize(20)
  drawTextOnArc(spirits[3], r5, angle1, 6, 20)
  fill(0)
  drawTextOnArc(spirits[0], r5, angle4, 6, 27)
  drawTextOnArc(spirits[1], r5, angle3, 6, 37)
  drawTextOnArc(spirits[2], r5, angle2, 7, 17)

  stroke(255, 255)
  strokeWeight(1.5)

  //The black moons
  drawMoon(-moon1); 
  drawMoon(-moon2)
  drawMoon(-moon3)
  drawMoon(-moon4)
  drawMoon(-moon5)
  drawMoon(-moon6)
  drawMoon(-moon7)
  drawMoon(-moon8)
  drawMoon(-moon9)
  drawMoon(-moon10)
  drawMoon(-moon11)
  drawMoon(-moon12)
  
  stroke(0)
  strokeWeight(0.5)
  noFill()
  textSize(8)

  //The moons: the text explaining each moon makes the animation heavy for rendering, that's why it's disabled

  /*drawTextOnArc("Lua da", rm+30, -moon1, 1, -2.5); drawTextOnArc("Renovaçao", rm+23, -moon1, 1, -4);
  drawTextOnArc("Lua da", rm+32, -moon2, 1, -2.5); drawTextOnArc("Limpeza", rm+23, -moon2, 1, -3.2);
  drawTextOnArc("Lua dos", rm+32, -moon3, 1, -2.5); drawTextOnArc("Ventos Fortes", rm+23, -moon3, 1, -5.5);
  drawTextOnArc("Lua dos", rm+32, -moon4, 1, -2.5); drawTextOnArc("Novos Começos", rm+23, -moon4, 1, -5.5);
  drawTextOnArc("Lua do", rm+32, -moon5, 1, -2.5); drawTextOnArc("Crescimento", rm+23, -moon5, 1, -5);
  drawTextOnArc("Lua da", rm+32, -moon6, 1, -2.5); drawTextOnArc("Floraçao", rm+23, -moon6, 1, -3.5);
  drawTextOnArc("Lua dos", rm+32, -moon7, 1, -2.5); drawTextOnArc("Dias Longos", rm+23, -moon7, 1, -4);
  drawTextOnArc("Lua do", rm+32, -moon8, 1, -2.5); drawTextOnArc("Amadurecimento", rm+23, -moon8, 1, -6.5);
  drawTextOnArc("Lua da", rm+32, -moon9, 1, -2.5); drawTextOnArc("Abundancia", rm+23, -moon9, 1, -4.5);
  drawTextOnArc("Lua do", rm+32, -moon10, 1, -2.5); drawTextOnArc("Cair das Folhas", rm+23, -moon10, 0.9, -5.8);
  drawTextOnArc("Lua da", rm+32, -moon11, 1, -2.5); drawTextOnArc("Decomposiçao", rm+23, -moon11, 1, -5);
  drawTextOnArc("Lua das", rm+32, -moon12, 1, -2.5); drawTextOnArc("Noites Longas", rm+23, -moon12, 1, -5);*/
  //Rotational function
  angle1 += speed; angle2 += speed; angle3 += speed; angle4 += speed;
  moon1 -= speed; moon2 -= speed; moon3 -= speed; moon4 -= speed;
  moon5 -= speed; moon6 -= speed; moon7 -= speed; moon8 -= speed;
  moon9 -= speed; moon10 -= speed; moon11 -= speed; moon12 -= speed;

}

//Functions related to zooming and panning with the mouse
function mouseWheel(event) {
  let zoomFactor = 0.03;
  if(event.delta > 0) {
    zoom *= (1- zoomFactor);
  } else {
    zoom *= (1 + zoomFactor)
  }
  return false;
}
function mousePressed() {
  dragStartX = mouseX - offsetX
  dragStartY = mouseY - offsetY
}
function mouseDragged() {
  offsetX = mouseX - dragStartX;
  offsetY = mouseY - dragStartY;
}

//Defining the function that makes text follow the arc
function drawTextOnArc (str, r, startAngle, angleStep, adj) {
  for (let i=0; i<str.length; i++) {
    let theta = startAngle + i * angleStep + adj;

    x1 = r * cos(theta)
    y1 = r * sin(theta)
    
    push();
    translate(x1, y1);
    rotate(theta + 90);
    text(str[i], 0, 0);
    pop()
  }
}

//Defining the function that allows me to add moons
function drawMoon (angle) {
  let xm1 = rm * cos(angle)
  let ym1 = rm * sin(angle)
  circle(xm1, ym1, 35) 
}
