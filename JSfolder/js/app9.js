let obj = {
    x : 150,
    y : 200,
    size : 50,
    offsetX : 0
};

function setup(){
    createCanvas(800,600);
}
//if mouse is pressed subtract 1 down to lowest number of zero
function draw(){
    circle(mouseX + obj.offsetX, mouseY,50);
    circle(mouseX,mouseY,50);
    if(mouseIsPressed){ //add 1 while pressed
        obj.offsetX++;
    } else {
        obj.offsetX--; //subtract 1 while not
    } //don't let number go below 0
    if (obj.offsetX < 0){
        obj.offsetX = 0;
    }
}