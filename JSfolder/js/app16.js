let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
box1.style.backgroundColor = "#FF0000";
box2.style.backgroundColor = "#0F00F0";
box3.style.backgroundColor = "#FF00F0";
let myArray = [2.1, 2.25, 3.2];

for(let i = 0; i < myArray.length; i++){
    if(myArray[0] < myArray[1]){
        box1.innerHTML += myArray[0];
        console.log("yeah");
    }else if(myArray[1] < myArray[2]){
        box2.innerHTML += myArray[1];
        console.log("no");
    }else if(myArray[2] > myArray[1]){
        box3.innerHTML += myArray[2];
    }else {
    console.log("broken");
    }
}
