


void setup(){

  size(800,600);
  noStroke();
  background(255);
} 

void draw(){
  fill(255,40,60);
  
  if(mousePressed){
    ellipse(mouseX, mouseY, 4, 4);}
  
  if(keyPressed){
     if (key=='e' || key=='E'){
      background(255);}
  } 
}
