
float diam;


void setup(){
size(600,400);
fill(255,0,0);
background(20,40,200);
noStroke();

}


void draw(){
  
diam = random(20,60);
if (diam > 40){
  fill(255,0,0,50);
  stroke(255,200,200);
  
} 

else {
  fill(255,0,0,100);
  noStroke();
}

ellipse(mouseX, mouseY, diam, diam); 

}
