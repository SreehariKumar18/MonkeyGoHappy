var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var road
var survival = 0
var bananaGroup, obstaclesGroup

function preload() {
  var score = 0

  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}



function setup() {
  createcanvas = 400, 400
  monkey = createSprite(50, 300, 50, 50)
  monkey.addAnimation("running", monkey_running)
  monkey.scale = 0.08

  road = createSprite(200, 330, 400, 5);
  road.veloityX = -3;

  obstaclesGroup = createGroup();
  bananaGroup = createGroup();
}


function draw() {
  background("green")

  stroke("white")
  textSize(20)
  fill("white")
  text("Score" + score, 500, 50)

  stroke("black")
  textSize(18)
  fill("black")
  survivival = Math.ceil(frameCount / frameRate())
  text("survivalTime=" + survival, 130, 50);

  if (keyDown("space") && monkey.y >= 300) {
    monkey.velocityY = -19;

  }
  monkey.velocityY = monkey.velocityY + 0.8

  monkey.collide(road)

 
  banana()
  obstacles()
  drawSprites()
}

function banana() {
  if (frameCount % 70  === 0) {
    var banana = createSprite(400, 80, 40, 10)
    banana.addImage(bananaImage)
    banana.y = Math.round(random(80,270))
    banana.velocityX = -4;
    banana.scale=0.1
   
  banana.lifeTime=1 
  }
}

function obstacles(){
  if (frameCount % 100 === 0){
   var obstacle = createSprite(600,310,10,40);
    obstacle.addImage(obstacleImage)
    obstacle.scale=0.1
    obstacle.velocityX=-3
    obstacle.collide(road)
  }
}