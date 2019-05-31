var gridSize = 30
var arraySize = (gridSize*gridSize)
var chanceOfLife = .09
var isAlive = []
var nextTurnIsAlive = []

function setup() {
    createCanvas(400, 400);

    for(var i = 0;i<arraySize;i++){
        var alive = (Math.random() < chanceOfLife)
        isAlive.push(alive)
    }
    frameRate(30)
}

function draw() {
    background(220);
    showAliveCells();
    decideWhichCellShouldBeAliveNextTurn();
}

function showAliveCells(){
    var cellWidth = width/gridSize;
    var x = 0;
    var y = 0;
    for(var i = 0;i<arraySize;i++){
        if(isAlive[i]){
            fill("black")
        } else {
            fill("white")
        }
        rect(x, y, cellWidth, cellWidth);

        x += cellWidth
        if((i+1) % gridSize == 0){
            x = 0
            y += cellWidth
        }
    }
}

function decideWhichCellShouldBeAliveNextTurn(){
    for(var i = 0;i<arraySize;i++){
        var numberOfLivingNeighbors = howManyNeighborsAreAlive(i)
        nextTurnIsAlive[i] = isAlive[i]

        if(isAlive[i] && numberOfLivingNeighbors < 2){
            nextTurnIsAlive[i] = false
        }
        if(isAlive[i] && numberOfLivingNeighbors > 3){
            nextTurnIsAlive[i] = false
        }
        if(isAlive[i] == false && numberOfLivingNeighbors == 3){
            nextTurnIsAlive[i] = true
        }
    }

    for(var n = 0;n<arraySize;n++){
        isAlive[n] = nextTurnIsAlive[n]
    }
}
function howManyNeighborsAreAlive(index){
    var neighborsAlive = 0
    var isVeryTop = (index < gridSize)
    var isVeryBottom = (index >= (gridSize*gridSize-gridSize-1))
    var isVeryLeft = (index%gridSize == 0)
    var isVeryRight = (index%gridSize == (gridSize-1))

    if(!isVeryTop){
        var topIndex = index-gridSize
        if(isAlive[topIndex]){
            neighborsAlive++
        }

        if(!isVeryLeft){
            if(isAlive[topIndex-1]){
                neighborsAlive++
            }
        }

        if(!isVeryRight){
            if(isAlive[topIndex+1]){
                neighborsAlive++
            }
        }
    }

    if(!isVeryBottom){
        //count all neighbors above
        var bottomIndex = index+gridSize
        if(isAlive[bottomIndex]){
            neighborsAlive++
        }

        if(!isVeryLeft){
            if(isAlive[bottomIndex-1]){
                neighborsAlive++
            }
        }

        if(!isVeryRight){
            if(isAlive[bottomIndex+1]){
                neighborsAlive++
            }
        }
    }

    if(!isVeryLeft){
        var leftIndex = index-1
        if(isAlive[leftIndex]){
            neighborsAlive++
        }
    }

    if(!isVeryRight){
        var rightIndex = index+1
        if(isAlive[rightIndex]){
            neighborsAlive++
        }
    }
    return neighborsAlive
}