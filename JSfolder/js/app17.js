let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let box5 = document.getElementById("box5");

box1.style.backgroundColor = "#FF0000";
box2.style.backgroundColor = "#0FF0F0";
box3.style.backgroundColor = "#FF00F0";
box4.style.backgroundColor = "#0F00F0";
box5.style.backgroundColor = "#FFFF00";


let myArray = ["Football", "Steak", "Forrest Gump", "My fiance", "Technology"];
for(let i = 0; i < myArray.length; i++){
    box1.innerHTML += myArray[i] + " is one of my favorite things<br/>";
}
