var bubbles = [];
function setup() {
    createCanvas(600, 400);
    colorMode(HSB,100);
}
function mouseDragged() {
    var r = random(10,40);
    //let b = new Bubble(random(600), random(400), r);
    var b = new Bubble(mouseX, mouseY, r);
    bubbles.push(b);
}

function draw() {
    background(0);
    for (var i = 0; i < bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].show();
    }
}
class Bubble {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }
    move() {
        var d = 3
        this.x = this.x + random(-d, d);
        this.y = this.y + random(-d, d);
    }
    show() {
        stroke(255);
        strokeWeight(4);
        fill(random(50,60),random(0,100),random(0,100));
        ellipse(this.x, this.y, this.r * 2);
    }
}