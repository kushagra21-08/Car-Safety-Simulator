var car 
var wall
var speed,wieght,deform

function setup() {
  createCanvas(800,400);
 wall = createSprite(750, 200, 30, 100);
 car = createSprite(0, 200, 20, 20);
 wall.shapeColor = ("black");
 speed = Math.round(random(55,90));
 wieght = Math.round(random(400,1500));
 car.velocityX = speed;
}

function draw() {
  background("darkBlue");
  
  if(wall.x - car.x < (car.width + wall.width)/2){
    deform = (0.5*wieght*speed*speed)/22500;
    car.velocityX = 0;
   if(deform < 100){
     car.shapeColor = ("green");
   } 
   if(deform > 100 && deform < 180){
    car.shapeColor = ("yellow");
  } 
  if(deform > 180){
    car.shapeColor = ("red");
  } 
  }

  drawSprites();

}