let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");

box1.style.backgroundColor = "#FF0000";
box2.style.backgroundColor = "#0F00F0";
box3.style.backgroundColor = "#00FFFF";

let myArray = [1.1, 2.25, 3.2];

console.log(myArray);

let second = 0;
let third = 0;

box2.innerHTML = myArray[1] + " seconds";
box1.innerHTML = myArray[0] + " seconds";
box3.innerHTML = myArray[2] + " seconds";