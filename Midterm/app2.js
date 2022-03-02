//Josh Tuffnell
//Midterm March 1st 2022

//declare div
let box1 = document.getElementById("box1");
//style the div
box1.style.backgroundColor = "#FF0000";
box1.style.height = "100px";
box1.style.width = "100px";

text = "yes";
text2 = "no";
box1.innerHTML = text;

//function that happens on click
function change() {
    if(box1.innerHTML == text){
    box1.innerHTML = text2;
    } else {
        box1.innerHTML = text;
    }
}