var x = 200;
var y = 200;
var r = 200;
var e = 255;
var b = 0;
var g = 0;
var q = 5;
function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);
    fill(e, b, g);
    ellipse(x, y, r);
    move();
    if (rollOver() == true) {
        e = 0;
        b = 255;
        g = 0;
    } else {
        e = 240;
        b = 30;
        g = 40;
    }
}
this.rollOver = function() {
    var d = dist(x, y, mouseX, mouseY);
    if (d < 0 + 100) {
        return true;
    } else {
        return false;
    }
}
this.move = function(){
    x = random(x + q, x -q);
    y = random(x + q, x -q);
}