
function Alien(x, y, speed) {
  this.x = x;
  this.y = y;
  this.r = 15;
  this.xdir = speed;
  alienimg = loadImage("Images/alien.png");
  
  this.shiftDown = function() { 
  this.xdir *= -1;
  this.y += this.r;
   
  }
  
  this.move = function() {
  this.x = this.x + this.xdir;
  }
  
  this.show = function() {
    image(alienimg, this.x - 15, this.y - 15, this.r * 2, this.r * 2);
  }
  this.yValue = function(){
  return this.y
  }
}