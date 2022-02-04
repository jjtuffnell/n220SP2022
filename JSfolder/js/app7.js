//create res variable
let res;

function setup() {
    createCanvas(600,800);
}
//let res = polarPoint function
function draw () {
    res = polarPoint();
    translate(100,100); //translate before drawing method
    circle(res.x, res.y,10); 
}
//create polarPoint function
function polarPoint(r) {
 x = r * Math.sin(mouseX); //set polarPoint x
 y = r * Math.cos(mouseX); //set polarPoint y
 return createVector(x,y); //directions say to write this return but I don't knwo what it does
}

