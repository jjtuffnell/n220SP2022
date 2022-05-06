//Josh Tuffnell
//May 3rd 2022
//Final Exam Q2

//declare div and original number
let box = document.getElementById("box");
let num = 1000;
//style div
box.style.width = "100px";
box.style.height = "100px";
box.style.backgroundColor = "#00FF00";
box.innerHTML = num;


//function to decrease number by 10%
function change() {
    num = num * .1;
   box.innerHTML = num;
}