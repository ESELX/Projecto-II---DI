
float largura;
float altura;
float espessuraLinha;
float raio;
float espMin, espMax;
int red;


void setup(){
  size(800,600);
  frameRate(30);

  largura = 50;
  altura = 50;
  espessuraLinha = 0;
  raio = 20;
  noFill();
  red = 255;


  stroke(red,red,red);

  //rectMode(CENTER);
}

void draw() {
  
  if (keyPressed == true && key == 'r' || key == 'R'){
     red = int(random(200,255));
     stroke(red,50,50);
  }
  
    if (keyPressed == true && key == 'g' || key == 'G'){
     red = int(random(200,255));
     stroke(50,red,50);
  }
  
    if (keyPressed == true && key == 'b' || key == 'B'){
     red = int(random(200,255));
     stroke(50,50,red);
  }
  
  if (mousePressed) {
    background(0);
    rectMode(CENTER);
    espMin = map(mouseX, 0, width, 4,30);
    espMax = espMin *4;
    altura = random(height/6, 3*height/4);
    largura = altura;
    espessuraLinha = random(espMin,espMax);
    raio = (altura*20/50); //50 - 20 assim como altura - x
    red = int(random(200,255));
    rect(width/2, height/2, largura, altura,raio,0,raio,0);
  }
  
  else {
    background(0);
  for (int i=1; i < 10 ; i++){
    for( int j = 1 ; j <10 ; j++){
      
  
      espMin = map(mouseX, 0, width, 2,8);
      espMax = espMin *4;
      altura = (random(height/6, 3*height/4))/10;
      largura = altura;
      espessuraLinha = random(espMin,espMax);
      raio = (altura*20/50); //50 - 20 assim como altura - x
      strokeWeight(espessuraLinha);
      ellipse(j* width/10 , i* height/10 , largura, altura);
    }
  }
}
}
