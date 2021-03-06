var f;
function setup() {
  createCanvas(400,400);
  f = createSprite(200,200,200,200);
}

function draw() {
  if(f.isTouched){
    f.shapeColor="red"
  }
  else{
    f.shapeColor="green"
  }
  drawSprites();
}