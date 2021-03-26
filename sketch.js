var fixedRect, movingRect,rect2;
var sq;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(550,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect2=createSprite(500,200,50,80);
  rect2.shapeColor="orange"
  rect2.debug=true;
  sq=createSprite(300,100,100,100)
  sq.shapeColor="cyan"
  sq.debug="true"
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(colourchange(movingRect,rect2)){
  movingRect.shapeColor = "red";
  rect2.shapeColor = "red";
  }
  else if(colourchange(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else if(colourchange(movingRect,sq)){
    movingRect.shapeColor = "red";
    sq.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
    rect2.shapeColor="orange";
    sq.shapeColor="cyan"
  }
  drawSprites();
}
//to add new file=<script src="file name"></script>