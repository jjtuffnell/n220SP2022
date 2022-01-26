//outputs a number to the console every draw call of P5

//starts at 0
let number= 0;
//increases by 1 every frame
function draw() {
    number = number + 1;
    console.log(number);
}