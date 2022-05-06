//Josh Tuffnell
//May 3rd 2022
//Final Exam Q1

//declare div
let box = document.getElementById("box");
//create array that skips the first word in array
//i starts at one instead of 0 to accomplish this
let myArray = ["cars","bikes","vans","trucks","velocipedes"];
for(let i = 1; i < myArray.length; i++){
    box.innerHTML += myArray[i];
}
