var shipImg1 ,ship_animacao
var mar
var seaImg
function preload(){
seaImg = loadImage("sea.png")
ship_animacao = loadAnimation ("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(400,400);
  mar = createSprite (600, 200, 300, 600)
  mar.addImage(seaImg)
  mar.scale = 0.3
  shipImg1 = createSprite (200, 160, 20, 50)
  shipImg1.addAnimation("ship1.png", ship_animacao)
  shipImg1.scale = 0.3
}

function draw() {
  background("blue");
    drawSprites();
  mar.velocityX = 1
 
}
