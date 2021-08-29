var garden,rabbit;
var gardenImg,rabbitImg;
var orangeLeaf,orangeLeafsGroup,orangeLeafImage;
var redleaf,redImagesGroup,redleafImage;
var apple,appleImagesGroup,appleImage;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  orangeLeafImage = loadImage("orangeLeaf.png");
redleafImage = loadImage("redImage.png");
appleImage = loadImage("apple.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
rabbit.x = World.mouseX;

  edges= createEdgeSprites();
  rabbit.collide(edges);

  spawnAppleImage();
  spawnOrangeLeaf();
  spawnRedLeaf();
  drawSprites();
  }

function spawnOrangeLeaf(){
if(frameCount % 80 === 0 ) {
orangeLeaf = createSprite(10,10,40,10);
orangeLeaf.addImage(orangeLeafImage);
orangeLeaf.x = Math.round(random(10,400));
orangeLeaf.scale = -0.1;
orangeLeaf.velocityY = 3;
orangeLeaf.lifetime = 150;
}}

function spawnRedLeaf(){
if(frameCount % 80 === 0){
redleaf = createSprite(10,10,40,10);
redleaf.addImage(redleafImage);
redleaf.scale = -0.1;
redleaf.x = Math.round(random(5,300));
redleaf.velocityY = 3;
redleaf.lifetime = 150;
}}

function spawnAppleImage(){
if(frameCount % 80 === 0){
apple = createSprite(10,10,40,10);
apple.addImage(appleImage);
apple.scale = -0.1;
apple.x = Math.round(random(5,350));
apple.velocityY = 3;
apple.lifetime = 150;
}}
























