function Ship() {
  shipimg = loadImage("Images/ship.png");
  this.x = width/2;
  this.xdir = 0;
  this.show = function() {
    fill(50,50,200);
    image(shipimg, this.x, height - 50, 64, 64);
  }
  
  this.setDir = function(dir) {
    this.xdir = dir;
  }
  this.move = function(dir) {
    this.x += this.xdir *5;
  }

  this.restrict = function() {
  if (this.x > width){
    this.x = 0
  }
  if (this.x < 0){
    this.x = width  
  }
  }
  }
