var monkey_running, bananaImage, obstacleImage, background, score, ground;

function preload() {
  background = loadimage("jungle.jpg");
  monkey_running = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("stone.png");
}


function setup() {
  createCanvas(400, 400);
  background = addImage("jungle.jpg");
  background.velocityX = -15;
  monkey_running = addAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  bananaImage = addImage("banana.png");
  obstacleImage = addImage("stone.png");
  ground=createSprite(200,380,400,10);
  ground.visible = false;
  score=0
}

function draw() {
  background("white");
  
  text("Score:"+score,300,125);
  if (bananaImage.isTouching(monkey_running)){
    score = score+2;
    bananaImage.destroyEach;
    switch(score){
      case 10: monkey_running.scale=0.12;
        break;
      case 20: monkey_running.scale=0.14;
        break;
      case 30: monkey_running.scale=0.16;
        break;
      case 40: monkey_running.scale=0.18;
        break;
        default: break;
    }
    if (obstacleImage.isTouching(monkey_running)){
      obstacleImage.destroyEach();
      banana.destroyeach();
      score=0;
      background.velocityX=0;
      monkey_running=addAnimation("Monkey_01.png");
    }
  
  drawSprites();
}