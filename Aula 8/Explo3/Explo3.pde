
float diam;
float posX;
float posY;
int quant;


void setup(){

size(800,600);
background(20,40,200);
noStroke();

}


void draw(){

  
background(20,40,200);  

quant = int(map(mouseX,0,width,0,100));

diam = random(20,60);

  if (diam > 40){
    fill(255,0,0,50);
    stroke(255,200,200);
  } 

  else {
    fill(255,0,0,90);
    noStroke();
  }
  
  for (int i = 0; i<quant; i++){  
    posY = map(i,0,quant,0,height);
    posX=posY;
    ellipse(posX, posY, diam, diam);
    
  }
}
