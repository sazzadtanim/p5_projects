
function Snake() {
  this.x = 0;
  this.y = 0;
  this.xSpeed = 1;
  this.ySpeed = 0;

  this.update= function (){
    this.x = this.x + this.xSpeed;
    this.y = this.y + this.ySpeed;

    this.x = constrain(this.x, 0 ,290);
    // print(this.x);
    this.y = constrain(this.y, 0 ,290);
  }

  this.show= function (){
    fill(0);
    rect(this.x, this.y, 10,10);
  }

}
