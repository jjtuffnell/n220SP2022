//Josh Tuffnell
//Midterm March 1st 2022

//declare div
let box1 = document.getElementById("box1");

//make array
myArray = ["up-","up-","down-","down-","down-","left-","right-","left-","right-","a-","b-","start"];
//loop to write values into the div,
//seperated by dashes
for(let i = 0; i < myArray.length; i++){
    box1.innerHTML += myArray[i];
}