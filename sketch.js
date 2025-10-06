let xMax = 400; // creazione del disegno tenendo conto della variabile
let yMax = 600;

let xRocekt = xMax/2; //stabilisco che il razzo parte da metà
let yRocekt = yMax*0.6;

let xPalace = xMax;

function setup() {
  createCanvas(xMax, yMax);
  frameRate();
  angleMode(degrees);
}

function draw() {

  //aprire contesto di disegno
  push();

    background (0,0,250);

    //rettangolo grigio
    fill(200);
    stroke(0);
    strokeWeight(0);
    rectMode(CENTER);
    rect(xPalace, 300, 200, 300);

    //rettangolo grigio 2
    fill(20);
    stroke(0);
    strokeWeight(0);
    rectMode(CENTER);
    rect(xPalace - 50, 200, 40, 50);
    rect(xPalace, 200, 40, 50);
    rect(xPalace + 50, 200, 40, 50);
    rect(xPalace - 50, 290, 40, 50);
    rect(xPalace, 290, 40, 50);
    rect(xPalace + 50, 290, 40, 50);
    rect(xPalace - 50, 370, 40, 50);
    rect(xPalace, 370, 40, 50);
    rect(xPalace + 50, 370, 40, 50);

    //rettangolo giallo
    fill(255, 200, 25);
    stroke(0);
    strokeWeight(0);
    rectMode(CENTER);
    rect(200, 350, 200, 100, 20);
    rect(200, 300, 125, 100, 20);

    //rettangolo blu
    fill(40, 150, 220);
    stroke(0);
    strokeWeight(0);
    rectMode(CENTER);
    rect(238, 290, 50, 50, 20);
    rect(172, 290, 70, 50, 20);

    //rettangolo grigio
    fill(100);
    stroke(0);
    strokeWeight(7);
    rectMode(CENTER);
    rect(200, 410, 235, 55, 15);

    //cerchio
    fill(255, 100, 20);
    stroke(0);
    strokeWeight(0)
    ellipse(170, 240, 40, 40);

    //rettangolo giallo
    fill(255, 200, 25);
    stroke(0);
    strokeWeight(0);
    rectMode(CENTER);
    rect(170, 250, 40, 30);

    //cerchio 1
    fill(255, 200, 25);
    stroke(0);
    strokeWeight(7)
    ellipse(200, 410, 50);
    ellipse(130, 410, 50);
    ellipse(270, 410, 50);

   //finire contesto di disegno
  pop();

  push();
    //braccio
    fill(255, 200, 25);
    stroke(0);
    strokeWeight(0);
    rotate();
    rectMode(CENTER);
    rect(xRocekt+90, yRocekt-80, 30, 100, 20,);
    rect(xRocekt+120, yRocekt-100, 80, 50, 10);
    
    

  pop();

  push(); //sfondo

    //prato
    fill(0, 200, 50);
    stroke(0);
    strokeWeight(0);
    rectMode(CENTER);
    rect(xMax/2, yMax-10, 400, 300);

  pop();


  yRocekt = (yRocekt - 1);
  if(yRocekt < 350){
    yRocekt = yRocekt + 60;
  }

  xPalace = (xPalace - 1);
  if(xPalace < -150) {
    xPalace = xPalace + 700;
  }
}
