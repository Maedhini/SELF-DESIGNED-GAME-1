var bgImg,bg
var player,shooter,shooter_shooting,shooterImg

function preload(){
bgImg = loadImage("./assets/bg.jpeg")

shooterImg = loadImage("./assets/shooter_2.png")
shooter_shooting = loadImage("./assets/shooter_3.png")
}


function setup(){
createCanvas(windowWidth,windowHeight)

bg = createSprite(windowWidth/2,windowHeight/2)
bg.addImage(bgImg)
bg.scale = 0.7

player = createSprite(500,600)
player.addImage(shooterImg)
player.scale=0.3
player.debug = true

player.setCollider("rectangle",0,0,300,300)
}


function draw(){
background(0)

if(keyDown("UP_ARROW") || touches.lenght>0){
player.y = player.y-30
}

if(keyDown("DOWN_ARROW") || touches.lenght>0){
  player.y = player.y+30
}

if(keyWentDown("space")){
 player.addImage(shooter_shooting)
}

else if(keyDown("space")){
  player.addAnimation(shooterImg)
}

drawSprites();


}