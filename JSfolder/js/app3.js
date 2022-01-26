//create canvas 400 by 300
function setup() {
    createCanvas (400,300);
}
//draw a circle where the mouse is at (mouseX,mouseY)
function draw() {
    circle(mouseX, mouseY, 30);

//when the mouse is on the right side of the canvas draw
// a circle in red
var myBool = mouseX < 200;
if (mouseX > 200) {
    fill(255,0,0);
}
//when the mouse is on the left side of the canvas draw
// a circle in blue
if (mouseX < 200) {
    fill(50,75,250);
}
}
