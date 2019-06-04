let snowflakes = []; // array to hold snowflake objects
function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(2,60,130);
    strokeWeight(1);
//snowcolor
    fill(255, 255, 255);
//head
    ellipse(200,190,80,80);
//body
    ellipse(200,300,150,150);
//eye/bottoncolor
    fill(90,65,65);
//left eye
    ellipse(180,180,10,10);
//right eye
    ellipse(215,180,10,10);
//nosecolor
    fill(239,118,57);
//nose
    triangle(160, 200, 200, 200, 200, 190);
//mouthcolor
    fill(0,0,0);
//mouth
    ellipse(180,210,5,5);
    ellipse(185,214,5,5);
    ellipse(190,215,5,5);
    ellipse(195,215,5,5);
    ellipse(200,214,5,5);
    ellipse(205,212,5,5);
    ellipse(210,210,5,5);
//armcolor
    stroke(90,60,65);
    strokeWeight(3);
//leftarm
    line(110, 290, 130, 275);
    line(100, 255, 130, 280);
    line(100, 270, 145, 280);
//rightarm
    line(250,290,300,280);
    line(265,290,300,270);
    line(265,290,290,290);
//hat
    noStroke();
    fill(139,69,19);
    rect(160,150,80,10);
    fill(109,39,0);
    rect(165,110,70,40);
    strokeWeight(2);
    stroke(100);
    fill(0);
    rect(196,150,10,9);

//snow
    noStroke();
    fill(255);
    rect(0,350,400,100);


    let t = frameCount / 60; // update time

    // create a random number of snowflakes each frame
    for (var i = 0; i < random(5); i++) {
        snowflakes.push(new snowflake()); // append snowflake object
    }

    // loop through snowflakes with a for..of loop
    for (let flake of snowflakes) {
        flake.update(t); // update snowflake position
        flake.display(); // draw snowflake
    }
}

// snowflake class
function snowflake() {
    // initialize coordinates
    this.posX = 10;
    this.posY = random(-50, 0);
    this.initialangle = random(0, 2 * PI);
    this.size = random(2, 3);

    // radius of snowflake spiral
    // chosen so the snowflakes are uniformly spread out in area
    this.radius = sqrt(random(pow(width / 1, 2)));

    this.update = function(time) {
        // x position follows a circle
        let w = 0.6; // angular speed
        let angle = w * time + this.initialangle;
        this.posX = width / 2 + this.radius * sin(angle);

        // different size snowflakes fall at slightly different y speeds
        this.posY += pow(this.size, 0.5);

        // delete snowflake if past end of screen
        if (this.posY > height) {
            let index = snowflakes.indexOf(this);
            snowflakes.splice(index, 1);
        }
    };

    this.display = function() {
        ellipse(this.posX, this.posY, this.size);
    };





}