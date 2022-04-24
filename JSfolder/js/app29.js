//Josh Tuffnell
//April 14 2022

//declare divs
let avg = document.getElementById("avg");
let userSum = document.getElementById("userSum");
let userAvg = document.getElementById("userAvg");
//start sum and average at 0
let sum = 0;
let average = 0;
//function to make array and find sum and avg
function check(){
    var string = avg.value
    let myArray = string.split(",")

    for(let i = 0; i < myArray.length; i++){
        sum = sum + parseFloat(myArray[i]);
    }
    userSum.innerHTML = "The sum: " + sum
    average = sum/(myArray.length)

    userAvg.innerHTML = "The average: " + average
}