var shipimg;
var alienimg;
var backgroundimg;
var ship;
var aliens = [];
var temp = [];
var bullets = [];
var score = 0;
var roundOver = false;
var readRows = 0;
var h = 1;
var velocity = 1;
var scoreBoard = 0;
var factor = 1.5;
var gameOver = false;
var button;
var t = 0;
var scoreText = 540;

function setup() {
    backgroundimg = loadImage("Images/background.jpg");
    createCanvas(600, 400);
    ship = new Ship();
    for (let j = 0; j < 3; j++) {
        for (let i = 0; i < 7; i++) {
            temp[i] = new Alien(i * 80 + 80, 20 + 80 * j, velocity);
        }
        aliens.push(temp);
        temp = []
    }
}

function draw() {
    stroke(255);
    strokeWeight(2);
    image(backgroundimg, 0, 0, width, height);
    if(t >= 5){
        score -= 1
        t = 0
    }
    textSize(15);
    text( 'Score ' + score, scoreText, scoreText - 520);
    ship.show();
    ship.move();
    ship.restrict();
    for (var i = 0; i < bullets.length; i++) {
        bullets[i].show();
        bullets[i].move();
        for (var n = 0; n < aliens.length; n++) {
            for (var j = 0; j < aliens[n].length; j++) {
                if (bullets[i].hits(aliens[n][j])) {
                    bullets[i].disapear();
                    aliens[n].splice(j, 1);
                    score = score + h;
                }
            }
        }
    }
    var edge = false;
    for (var n = 0; n < aliens.length; n++) {
        for (var i = 0; i < aliens[n].length; i++) {
            aliens[n][i].show();
            aliens[n][i].move();
            if (aliens[n][i].x > width || aliens[n][i].x < 0) {
                edge = true;
            }
        }

        if (edge) {
            for (var i = 0; i < aliens[n].length; i++) {
                aliens[n][i].shiftDown();
            }
        }
    }

    for (var q = bullets.length - 1; q >= 0; q--) {
        if (bullets[q].toDelete) {
            bullets.splice(q, 1);
        }
    }
    readRows = 0;
    for (let e = 0; e < aliens.length; e++) {
        if (aliens[e].length == 0) {
            readRows++;
        }
    }
    if (readRows == aliens.length) {
        roundOver = true;
    }

    if (roundOver == true && gameOver == false) {
        h = h + 1;
        velocity = velocity * factor;
        print("Round " + h);
        textSize(10);
        score += 10
        for (let j = 0; j < 3; j++) {
            for (let i = 0; i < 7; i++) {
                temp[i] = new Alien(i * 80 + 80, 20 + 80 * j, velocity + velocity);
            }
            aliens.push(temp);
            temp = []
        }
        roundOver = false;
    }

    for (let s = 0; s < aliens.length; s++) {
        for (let t = 0; t < aliens[s].length; t++) {
            if (aliens[s][t].yValue() >= height ) {
                gameOver = true;
            }
        }
    }
    if (gameOver == true) {
        background(0);
        fill(255);
        aliens = []
        textSize(50);
        text('Game Over',150,200);
        text( 'Round ' + h, 150, 250);
        text( 'Score ' + score, 150, 300);
        textSize(10);
        button = createButton("play again")
        button.position(10,10);
        button.mousePressed(restart);
    } else {
    }
}
function restart() {
    gameOver = false;
    h = 0;
    velocity = .83333333333;
    score = 0
    factor = 1.2;
}
function keyReleased() {
    if (key != ' ') {
        ship.setDir(0);
    }
}

function keyPressed() {
    if (key === ' ') {
        var bullet = new Bullet(ship.x + 33, height - 30);
        bullets.push(bullet);
    }
    if (key === 'f') {
        for (var n = 0; n < aliens.length; n++) {
            for (var j = 0; j < aliens[n].length; j++) {
                aliens[n].splice(j, 7);
            }
        }
    }
    if (keyCode === RIGHT_ARROW) {
        ship.setDir(1);
    } else if (keyCode === LEFT_ARROW) {
        ship.setDir(-1);
    }
}