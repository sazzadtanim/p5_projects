var s;
var food;

function setup() {
  createCanvas(width=300, height=300);
  s= new Snake();
  food=  new Food();
}

function draw() {
  background(255);
  s.update();
  s.show();
  food.show();



  if(food.checksSnakeLocation(s)<10){
    food = new Food();
    // s.push(new Snake());
    print(s.length);
  }

}

function keyPressed(){
  if(keyCode==UP_ARROW){
    s.xSpeed=0;
    s.ySpeed=-1;
  } else if(keyCode==DOWN_ARROW){
    s.xSpeed=0;
    s.ySpeed=1;
  }else if(keyCode==LEFT_ARROW){
    s.xSpeed=-1;
    s.ySpeed=0;
  }else if(keyCode==RIGHT_ARROW){
    s.xSpeed=1;
    s.ySpeed=0;
  }

}
