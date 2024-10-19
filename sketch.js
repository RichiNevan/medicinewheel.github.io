new p5()

let offsetX = 0;
let offsetY = 0;
let zoom = 1.0;
let dragStartX; let dragStartY;
let angle1 = 0;
let angle2 = 90;
let angle3 = 180;
let angle4 = 270;
let speed = 0.1;
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
let emisfero = localStorage.getItem('emisfero')

//Defining function to map angle degrees to days of the year
function getDegrees(day) {
  let updayted = day-80
  let angle = map(updayted, 0, 365, 0, 360)
  return angle
}

//Getting the numbered day of today & calculating moon degrees
let tday = new Date();
let todayNum = Math.ceil((tday - new Date(tday.getFullYear(),0,1)) / 86400000);

let moon1 = (-getDegrees(15)-90);
let moon2 = (-getDegrees(40)-90); 
let moon3 = (-getDegrees(70)-90); 
let moon4 = (-getDegrees(99)-90); 
let moon5 = (-getDegrees(128)-90);
let moon6 = (-getDegrees(158)-90); 
let moon7 = (-getDegrees(187)-90);
let moon8 = (-getDegrees(217)-90);
let moon9 = (-getDegrees(246)-90);
let moon10 = (-getDegrees(276)-90); //cair das folhas 
let moon11 = (-getDegrees(306)-90); 
let moon12 = (-getDegrees(336)-90); 

const menuBtn = document.getElementById('menuBtn');
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('clicked')
  document.getElementById('links').classList.toggle('dropdown')
})

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  canvas.parent('canvas-container')
  textAlign(CENTER);
  textFont("Georgia")
  console.log("today: "+todayNum)
  console.log("moon10: " + moon10)
  img = loadImage('images/background.jpg')
}

function draw() {
  background(img);
  fill(180, 130, 170)
  stroke(30)
  strokeWeight(1)
  textSize(20)
  text("TODAY: "+ tday.getDate() + "/" + (tday.getMonth()+1) + "/" + tday.getFullYear(), 210, 82)
  translate(width/2, height/2)
  wheel()
  drawAllMoons()

  if (emisfero == "Nord") {
    writeMoonsNamesNORD()
  } else {
    writeMoonsNamesSUD()
  }
  
  writeCardinals()
  
  if (windowWidth < 600) {
    zoom = 0.8
  } else if (windowWidth < 450) {
    zoom = 0.1
  }
  //rotateWheel()
  //console.log("framerate: " + frameRate())
}

function drawAllMoons() {
  if (emisfero == "Sud") {
    rotate(180)
  }
  stroke(255, 255)
  strokeWeight(1.5)
  drawMoon(moon1); 
  drawMoon(moon2)
  drawMoon(moon3)
  drawMoon(moon4)
  drawMoon(moon5)
  drawMoon(moon6)
  drawMoon(moon7)
  drawMoon(moon8)
  drawMoon(moon9)
  drawMoon(moon10)
  drawMoon(moon11)
  drawMoon(moon12)
  textSize(14)
  fill(255)
  noStroke()
  drawTextOnArc("1/12", rm-2, moon12, 1.1, -2)
  drawTextOnArc("20/1", rm-2, moon1, 1.1, -2)
  drawTextOnArc("19/2", rm-2, moon2, 1.1, -2)
  drawTextOnArc("21/3", rm-2, moon3, 1.3, -2.5)
  drawTextOnArc("20/4", rm-2, moon4, 1.1, -2)
  drawTextOnArc("21/5", rm-2, moon5, 1.1, -2)
  drawTextOnArc("21/6", rm-2, moon6, 1.1, -2)
  drawTextOnArc("22/7", rm-2, moon7, 1.1, -2)
  drawTextOnArc("23/8", rm-2, moon8, 1.1, -2)
  drawTextOnArc("23/9", rm-2, moon9, 1.1, -2)
  drawTextOnArc("2/10", rm-2, moon10, 1.1, -2)
  drawTextOnArc("1/11", rm-2, moon11, 1.1, -1.7)
}

function writeMoonsNamesNORD() {
  stroke(0)
  strokeWeight(0.5)
  noFill()
  textSize(8)
  drawTextOnArc("Lua da", rm+30, moon1, 1, -2.5); drawTextOnArc("Renovaçao", rm+23, moon1, 1, -4);
  drawTextOnArc("Lua da", rm+32, moon2, 1, -2.5); drawTextOnArc("Limpeza", rm+23, moon2, 1, -3.2);
  drawTextOnArc("Lua dos", rm+32, moon3, 1, -2.5); drawTextOnArc("Ventos Fortes", rm+23, moon3, 1, -5.5);
  drawTextOnArc("Lua dos", rm+32, moon4, 1, -2.5); drawTextOnArc("Novos Começos", rm+23, moon4, 1, -5.5);
  drawTextOnArc("Lua do", rm+32, moon5, 1, -2.5); drawTextOnArc("Crescimento", rm+23, moon5, 1, -5);
  drawTextOnArc("Lua da", rm+32, moon6, 1, -2.5); drawTextOnArc("Floraçao", rm+23, moon6, 1, -3.5);
  drawTextOnArc("Lua dos", rm+32, moon7, 1, -2.5); drawTextOnArc("Dias Longos", rm+23, moon7, 1, -4);
  drawTextOnArc("Lua do", rm+32, moon8, 1, -2.5); drawTextOnArc("Amadurecimento", rm+23, moon8, 1, -6.5);
  drawTextOnArc("Lua da", rm+32, moon9, 1, -2.5); drawTextOnArc("Abundancia", rm+23, moon9, 1, -4.5);
  drawTextOnArc("Lua do", rm+32, moon10, 1, -2.5); drawTextOnArc("Cair das Folhas", rm+23, moon10, 0.9, -5.8);
  drawTextOnArc("Lua da", rm+32, moon11, 1, -2.5); drawTextOnArc("Decomposiçao", rm+23, moon11, 1, -5);
  drawTextOnArc("Lua das", rm+32, moon12, 1, -2.5); drawTextOnArc("Noites Longas", rm+23, moon12, 1, -5);
}

function writeMoonsNamesSUD() {
  stroke(0)
  strokeWeight(0.5)
  noFill()
  textSize(8)
  drawTextOnArc("Lua da", rm+30, moon7, 1, -2.5); drawTextOnArc("Renovaçao", rm+23, moon7, 1, -4);
  drawTextOnArc("Lua da", rm+32, moon8, 1, -2.5); drawTextOnArc("Limpeza", rm+23, moon8, 1, -3.2);
  drawTextOnArc("Lua dos", rm+32, moon9, 1, -2.5); drawTextOnArc("Ventos Fortes", rm+23, moon9, 1, -5.5);
  drawTextOnArc("Lua dos", rm+32, moon10, 1, -2.5); drawTextOnArc("Novos Começos", rm+23, moon10, 1, -5.5);
  drawTextOnArc("Lua do", rm+32, moon11, 1, -2.5); drawTextOnArc("Crescimento", rm+23, moon11, 1, -5);
  drawTextOnArc("Lua da", rm+32, moon12, 1, -2.5); drawTextOnArc("Floraçao", rm+23, moon12, 1, -3.5);
  drawTextOnArc("Lua dos", rm+32, moon1, 1, -2.5); drawTextOnArc("Dias Longos", rm+23, moon1, 1, -4);
  drawTextOnArc("Lua do", rm+32, moon2, 1, -2.5); drawTextOnArc("Amadurecimento", rm+23, moon2, 1, -6.5);
  drawTextOnArc("Lua da", rm+32, moon3, 1, -2.5); drawTextOnArc("Abundancia", rm+23, moon3, 1, -4.5);
  drawTextOnArc("Lua do", rm+32, moon4, 1, -2.5); drawTextOnArc("Cair das Folhas", rm+23, moon4, 0.9, -5.8);
  drawTextOnArc("Lua da", rm+32, moon5, 1, -2.5); drawTextOnArc("Decomposiçao", rm+23, moon5, 1, -5);
  drawTextOnArc("Lua das", rm+32, moon6, 1, -2.5); drawTextOnArc("Noites Longas", rm+23, moon6, 1, -5);
}

//Functions related to zooming and panning with the mouse
function mouseWheel(event) {
  let zoomFactor = 0.01;
  if(event.delta > 0) {
    zoom *= (1- zoomFactor);
  } else {
    zoom *= (1 + zoomFactor)
  }
  return false;
}
/*
function mousePressed() {
  dragStartX = mouseX - offsetX
  dragStartY = mouseY - offsetY
}
function mouseDragged() {
  offsetX = mouseX - dragStartX;
  offsetY = mouseY - dragStartY;
}*/


function wheel() {
  translate(offsetX, offsetY)
  scale(zoom)
  drawToday()

  if (emisfero == "Nord") {
  rotate(getDegrees(todayNum)) //At 0 degrees, the wheel is set on the spring equinox
  } else {
    rotate(getDegrees(todayNum)+180)
  }

  //Wheel's colored sections
  stroke(0); strokeWeight(3)
  fill(80);
  let aut = arc(0, 0, 500, 500, angle1, angle2);
  fill(230, 10, 10);
  let est = arc(0, 0, 500, 500, angle2, angle3);
  fill(230, 210, 0);
  let pri = arc(0, 0, 500, 500, angle3, angle4);
  fill(225)
  let inv = arc(0, 0, 500, 500, angle4, angle1);

  // Concentric circles
  drawConcCircles()
  
  //Text on the Wheel
  textSize(10)
  strokeWeight(0.7)
  drawTextOnArc(elements[0], r1, angle4, 7, 45)
  drawTextOnArc(elements[1], r1, angle3, 7, 33)
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
  drawTextOnArc(spirits[3], r5, angle1, 6, 15)
  fill(0)
  drawTextOnArc(spirits[0], r5, angle4, 6, 27)
  drawTextOnArc(spirits[1], r5, angle3, 6, 32)
  drawTextOnArc(spirits[2], r5, angle2, 7, 12)
}

function writeCardinals() {
  textSize(40)
  strokeWeight(1.0)
  noFill()
  drawTextOnArc("N", rm+45, angle1, 1, 0)
  drawTextOnArc("O", rm+45, angle2, 1, 0)
  drawTextOnArc("S", rm+45, angle3, 1, 0)
  drawTextOnArc("E", rm+45, angle4, 1, 0)
}


function drawConcCircles() {
  strokeWeight(2)
  circle(0, 0, 30)
  noFill()
  circle(0, 0, 150)
  circle(0, 0, 180)
  circle(0, 0, 210)
  circle(0, 0, 240)
}
//Defining the function that makes text follow the arc
function drawTextOnArc (str, r, startAngle, angleStep, adj) {
  
  const texts = []
  for (let i=0; i<str.length; i++) {
    let theta = startAngle + i * angleStep + adj;

    x1 = r * cos(theta)
    y1 = r * sin(theta)
    
    push();
    translate(x1, y1);
    rotate(theta + 90);
    const atext = text(str[i], 0, 0);
    pop()

    texts.push(atext)
  }
  return texts
}

function rotateWheel() {
  angle1 += speed; angle2 += speed; angle3 += speed; angle4 += speed;
  moon1 += speed; moon2 += speed; moon3 += speed; moon4 += speed;
  moon5 += speed; moon6 += speed; moon7 += speed; moon8 += speed;
  moon9 += speed; moon10 += speed; moon11 += speed; moon12 += speed;
}

function drawToday() {
  fill(180, 130, 170)
  stroke(30)
  strokeWeight(1)
  triangle(0, -rm, 10, -rm-70, -10, -rm-70)
  textSize(20) 
}

//Defining the function that allows me to add moons
function drawMoon (angle) {
  let xm1 = rm * cos(angle)
  let ym1 = rm * sin(angle)
  circle(xm1, ym1, 35) 
}

