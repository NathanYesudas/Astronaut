var astronaut ,bathImg
var brush,brushImg
var drink,drinkImg
var eat, eatImg
var gym,gymImg
var iss,issImg
var move,moveImg
var sleep,sleepImg
function preload() {
  bathImg= loadAnimation("assets/bath1.png","assets/bath2.png")
  brushImg= loadImage("assets/brush.png")
  drinkImg = loadAnimation("assets/drink1.png","assets/drink2.png")
  eatImg = loadAnimation("assets/eat1.png","assets/eat2.png")
  gymImg = loadAnimation("assets/gym1.png","assets/gym2.png","assets/gym11.png","assets/gym12.png")
  moveImg = loadAnimation("assets/move.png")
  issImg = loadImage("assets/iss.png")
  sleepImg = loadImage("assets/sleep.png")
}

function setup() {
  createCanvas(800,400);
  astronaut = createSprite(400, 200, 50, 50);
  astronaut.addAnimation("moving",moveImg)
  astronaut.addAnimation("bathing",bathImg)
  astronaut.addAnimation("drinking",drinkImg)
  astronaut.addAnimation("eating",eatImg)
  astronaut.addAnimation("exercise",gymImg) 
  astronaut.addAnimation("sleeping",sleepImg) 
  astronaut.scale = 0.15
}

function draw() {
  background(issImg);  

 if(keyDown("UP_ARROW")) {
    console.log("up arrow pressed");
    astronaut.x=100;
    astronaut.y=150;
    astronaut.changeAnimation("bathing",bathImg)
   }
  if(keyDown("DOWN_ARROW")){
  astronaut.x=300;
  astronaut.y=250;
  astronaut.changeAnimation("drinking",drinkImg)
  }
  if(keyDown("RIGHT_ARROW")){
  astronaut.x=200;
  astronaut.y=250;
  astronaut.changeAnimation("eating",eatImg)
  }

  if(keyDown("LEFT_ARROW")){
  astronaut.x=100;
  astronaut.y=250;
  astronaut.changeAnimation("exercise",gymImg) 
  }
   
  if(keyDown("LEFT_ARROW")){
  astronaut.x=100;
  astronaut.y=250;
  astronaut.changeAnimation("exercise",gymImg) 
  } 
  
  if(keyDown("a")){
    astronaut.x=100;
    astronaut.y=250;
    astronaut.changeAnimation("sleeping",sleepImg) 
    } 
  
  
  drawSprites();

}
