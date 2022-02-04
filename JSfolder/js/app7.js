let res;

function setup() {
    createCanvas(600,800);
}
function draw () {
    res = polarPoint();
    translate(100,100);
    circle(res.x, res.y,10); 
}
function polarPoint(r) {
 x = r * Math.sin(mouseX);
 y = r * Math.cos(mouseX);
 return createVector(x,y);
}

