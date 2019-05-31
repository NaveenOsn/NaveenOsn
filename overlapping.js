let bubbles = []

function setup() {
    createCanvas(600, 400);
    for (let i = 0; i < 15; i ++){
        let x = random(width);
        let y = random(height);
        let r = random(30,70);
        bubbles[i] = new Bubble(x, y, r);
    }
}
let overlaping = false;
function draw() {
    background(0);
    for (var b of bubbles){
        b.show();
        b.move();
        overlaping = false;
        for (j = 0; j < bubbles.length; j++) {
            if (b !== bubbles[j] && b.intersects(bubbles[j])){
                overlaping = true;
            }
        }
        if (overlaping == true){
            b.changeColor(255);
        } else {
            b.changeColor(0);
        }

    }
}

class Bubble {
    constructor (x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.brightness = 255;
    }
    changeColor(bright) {
        this.brightness = bright;
    }
    intersects(other) {
        let d = dist(this.x, this.y, other.x, other.y);
        if ( d < this.r + other.r) {
            return true;
        } else {
            return false;
        }
    }
    show() {
        fill(this.brightness);
        stroke(255);
        ellipse(this.x, this.y, this.r*2);

    }
    move() {
        this.x = this.x + random(-5,5);
        this.y = this.y + random(-5,5);
    }
    contains() {
        let d = dist(this.x, this.y, other.x, other.y);
        if ( d < this.r + other.r) {
            return true;
        }
    }
}