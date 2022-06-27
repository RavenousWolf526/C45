var w4,windowsImg

function preload(){
 windowsImg = loadImage("Images/4Windows.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
 w4= createSprite(width/2,height/2)
 w4.addImage(windowsImg)
 w4.scale = 1.7;
}

function draw() {
  
  background(180);
 
  

  drawSprites();
}
