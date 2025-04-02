function setup() {
  createCanvas(400, 400);
}

let xJogador1 = 0;
let xJogador2 = 0;
let xJogador3 = 0;
let xJogador4 = 0;

function draw() {
  if (focused == true) {
    background("#D2EBB5");
  } else {
    background("#9C27B0");
  }

  textSize(30);
  text("🤩", xJogador1, 40);
  text("❤️", xJogador2, 100);
text("🥰", xJogador3, 200);
text("😊", xJogador4, 300);
  rect(350, 0, 10, 400);
  if (xJogador1 > 350) {
    text("Jogador 1 venceu!", 50, 200);
    noLoop();
  }
  if (xJogador2 > 350) {
    text("Jogador 2 venceu!", 50, 200);
    noLoop();
  }
 if (xJogador3 > 350) {
    text("Jogador 3 venceu!", 50, 200);
    noLoop();
  }
 if (xJogador4 > 350) {
    text("Jogador 4 venceu!", 50, 200);
    noLoop();
  }
}

function keyReleased() {
  if (key == "a") {
    xJogador1 += random(20);
  }
  if (key == "s") {
    xJogador2 += random(20);
  }
 if (key == "d") {
    xJogador3 += random(20);}

 if (key == "f") {
    xJogador4 += random(20);}
}
    
  



  
  
  
