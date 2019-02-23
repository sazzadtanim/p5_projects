function Food(){
  this.x= Math.floor(random(0,290));
  this.y= Math.floor(random(0,290));

  this.show= function (){
    fill(255,0,0);
    rect(this.x, this.y, 10, 10);
  }
  this.checksSnakeLocation =function (other){
    let d= dist(this.x, this.y, other.x, other.y);
    return d;
  }
}
