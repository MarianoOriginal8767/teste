var sprite
function setup() {
  createCanvas(400,400);
  sprite = createSprite(200,200,30,30)
  sprite.shapeColor="chartreuse"
}

function draw() 
{
  background(30);
  drawSprites()
  if (keyIsDown(RIGHT_ARROW)) {
    sprite.x += 3
  }
  if (keyIsDown(LEFT_ARROW)) {
    sprite.x -= 3
  }
  if (keyIsDown(DOWN_ARROW)) {
    sprite.y += 3
  }
  if (keyIsDown(UP_ARROW)) {
    sprite.y -= 3
  }
}




