let bubbles = [];
function setup() {
    createCanvas(600, 400);
    colorMode(HSB,100);
}
function draw() {
    //background(0);
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].display();
        bubbles[i].bounce();
    }
}
function mousePressed() {
    var w = random(100)
    var y = random(70,90)
    var z = random(80,100)
    var b = new Bubble(mouseX, mouseY);
    stroke(random(100),random(70,90),random(80,100));
    fill(w,y,z);
    background(w,y,z);
    bubbles.push(b);
}
class Bubble {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.xspeed = 4;
        this.yspeed= -3;
    }
    move() {
        this.x = this.x + this.xspeed;
        this.y = this.y + this.yspeed;
    }
    display() {
        strokeWeight(4);
        ellipse(this.x, this.y, 30);
        ellipse(this.x,this.y, 24, 24);

    }
    bounce() {
        if (this.x > width || this.x < 0) {
            this.xspeed = this.xspeed * -1;
        }
        if (this.y > height || this.y < 0) {
            this.yspeed = this.yspeed * -1;
        }
    }

}