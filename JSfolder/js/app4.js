//introduce variables
let xPos = 0;

//create Canvas
function setup() {
    createCanvas (800,600);
}
//draw a ball that starts at left side of the screen
function draw() {
    background(60,60,60); //clear circle on gray background
    xPos = xPos + 5; //move right 5px per frame
    circle(xPos, 200, 50);

//reset circle back to far left when circle hits 800px
    if (xPos > 800) { 
        xPos = 0; 
    }
}