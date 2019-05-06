
float largura;
float altura;
float espessuraLinha;
float raio;
float espMin, espMax;


void setup(){
  size(800,600);
  frameRate(30);

  largura = 50;
  altura = 50;
  espessuraLinha = 0;
  raio = 20;

  stroke(255);
  noFill();
  rectMode(CENTER);
}

void draw() {
  
  background(0);
  
  espMin = map(mouseX, 0, width, 2,20);
  espMax = espMin *4;
  
  altura = random(height/6, 3*height/4);
  largura = altura;
  espessuraLinha = random(espMin,espMax);
  raio = (altura*20/50); //50 - 20 assim como altura - x

  strokeWeight(espessuraLinha);
  rect(width/2, height/2, largura, altura,raio,0,raio,0);

}
