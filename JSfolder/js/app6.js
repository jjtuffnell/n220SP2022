//create variable for color
let newColor;

function setup() {
    createCanvas(800,600);
}
//create function to remove red
function removeRed() {
    newColor.setRed(0);
}

function draw(){
    newColor = color(170,200,150); 
    //first circle with orginal given color
    fill (newColor);
    circle(100,200,100);
    //use function to change red value
    removeRed(); 
    fill(newColor);
    circle(300,200,100);
}

