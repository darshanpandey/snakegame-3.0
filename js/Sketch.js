var  foodSound = new Audio('music/food.mp3');
var gameOverSound = new Audio('music/gameover.mp3');
var moveSound = new Audio('music/move.mp3');
var musicSound = new Audio('music/music.mp3');
var speed = 19;
var score = 0;
var  lastPaintTime = 0;
var snakeArr = [
    {x: 13, y: 15}
];

food = {x: 6, y: 7};

function isCollide(snake) {
    // If you bump into yourself 
    for (var i = 1; i < snakeArr.length; i++) {
        if(snake[i].x === snake[0].x && snake[i].y === snake[0].y){
            return true;
        }
    }
    // If you bump into the wall
    if(snake[0].x >= 18 || snake[0].x <=0 || snake[0].y >= 18 || snake[0].y <=0){
        return true;
    }
        
    return false;
}
