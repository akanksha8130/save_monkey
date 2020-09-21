
var monkey , monkeyrun;
var banana ,bananaImg, obstacle, obstacleImg,ground;
var Fruit, obstacles
var score
var bananaGroup,ObstacleGroup;
var survivalTime=0;

function preload(){
  bananaImg=loadImage("banana.png")
monkeyrun=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  obstacleImg=loadImage("obstacle.png")
    
}
function setup() {
 // createCanvas(600,600)
ground=createSprite(400,350,900,10)
  ground.velocityX=-4
  monkey=createSprite(80,315,20,20)
  monkey.addAnimation("monkey",monkeyrun)
  monkey.scale=0.1

bananaGroup=createGroup()
  ObstacleGroup=createGroup()
}


function draw() {
  background(220)
  monkey.collide(ground)
     
   if(ObstacleGroup.isTouching(monkey)){
     ground.velocityX=0;
     monkey.velocityY=0;
     ObstacleGroup.setVelocityXEach(0)
     bananaGroup.setVelocityXEach(0)
     ObstacleGroup.setLifetimeEach(0);
       bananaGroup.setLifetimeEach(-1)
      ObstacleGroup.setLifetimeEach(-1)
     monkey.changeAnimation()
   }
  
  stroke("black");
  textSize(20);
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+ survivalTime,100,50);
  
  if (ground.x <0){
     ground.x=250

    }
    if(keyDown("space") ){
  monkey.velocityY=-12
  }
  
  
    monkey.velocityY = monkey.velocityY + 0.8
    fruit()
  obstacles()
  
drawSprites()
  
}


function fruit()
{
    if (frameCount % 80 === 0){
  banana=createSprite(350,270,20,20)
  banana.addImage(bananaImg)
  banana.scale=0.1  
  banana.velocityX=-3
      banana.y=Math.round(random(120,200))
      banana.lifetime=80
      bananaGroup.add(banana)
    }
}


function  obstacles(){
   if (frameCount % 300 === 0){
     obstacle=createSprite(500,330,20,20)
  obstacle.scale=0.1
  obstacle.addImage(obstacleImg)
     obstacle.velocityX=-3
       obstacle.lifetime = 170;
     ObstacleGroup.add(obstacle)
   }
   

}