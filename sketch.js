var ship ,ship1;
var sea ,sea1;


function preload(){
ship1=loadAnimation("ship-1.png,ship-2.png,ship-3.png,ship-4.png")
sea1=loadAnimation("sea.png")
}

function setup(){
  createCanvas(400,400);
  
  ship = createSprite(50,200,20,50);
  ship.addanimation("running", ship1);
  edges = createEdgeSprites
  ship.scale=0.25;
  ship.x = 90;
  ship.y = 300;

  sea = createSprite (600,300);
  sea.addanimation("running, sea1")
  sea.scale=0.5;
  sea.velocityX = -1
}

function draw() {
  background("blue");
 if(keydown("right")){
ship.velocityX=5;
 }

 if(keydown("left")){
ship.velocityX=-5;
 }

if(keydown("space")){
ship.velocityX=0;
}

if (sea.x < 0){
sea.x = sea.width/2;
}

ship.collide(edges[3])
drawSprites();
}