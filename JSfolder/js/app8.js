let obj = {
    height: 50,
    width: 25,
    color: "#34a4eb",
    positionx : 400,
    positiony : 150
};
function setup(){
    createCanvas(500,300);
    background(100);
}
function draw(){
    drawing(200,200);
}

function drawing(x,y){
    ellipse(x,y,10,10);
    ellipse(40,y,50,50);
    ellipse(x,80,100,100);
    fill(obj.color);
    rect (obj.positionx, obj.positiony, obj.width, obj.height);
}

