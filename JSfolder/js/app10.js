//introduce variables
let xPos = {
    position: 0,
    color: "#34a4eb",
};

//create Canvas
function setup() {
    createCanvas (800,600);
}
//draw a ball that starts at left side of the screen
function draw() {
    background(60,60,60); //clear circle on gray background
    xPos.position = xPos.position + 5; //move right 5px per frame
    circle(xPos.position, 200, 50);
    fill (xPos.color);

//reset circle back to far left when circle hits 800px
    if (xPos.position > 800) { 
        xPos.position = 0; 
    }
}