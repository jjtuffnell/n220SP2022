function setup() {
    createCanvas(800,600);
    //background color
    background(255,255,0);

    //first eyeball
    fill(255,255,255)
    circle(250,250,200);

    fill(80,180,240);
    circle(250,250,100);

    fill(0,0,0);
    circle(250,250,50);

    //second eyeball
    fill(255,255,255)
    circle(500,250,200);

    fill(80,180,240);
    circle(500,250,100);

    fill(0,0,0);
    circle(500,250,50);
    //mouth
    line(100,500,675,500);
}