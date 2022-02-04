

function setup (){
    createCanvas (800,600);

}
function draw () {

    drawiPhone(mouseX,mouseY,120,200);

    drawiPhone(mouseX+100,mouseY+100,120,200);

    drawiPhone(mouseX+200,mouseY+200,120,200);

}
//functions
function drawiPhone(x,y) {
    //draw iphone
    rect (x,y,120,200,20,20);
    circle(x+60,y+185,20);
}