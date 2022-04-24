//Josh Tuffnell
//April 13 2022
function setup(){
    createCanvas(800,600);
}
//declare divs
let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
//add event listeners to divs
box1.addEventListener("click", onClick);
box2.addEventListener("click", onClick);
box3.addEventListener("click", onClick);
//1st div style
box1.style.width = "200px";
box1.style.height = "200px";
box1.style.backgroundColor = "#D3D3D3";
box1.style.margin = "5px";
box1.style.float = "left";
//2nd div style
box2.style.width = "200px";
box2.style.height = "200px";
box2.style.backgroundColor = "#D3D3D3";
box2.style.float = "left";
box2.style.margin = "5px";
//3rd div style
box3.style.width = "200px";
box3.style.height = "200px";
box3.style.backgroundColor = "#D3D3D3";
box3.style.margin = "5px";
box3.style.float = "left";

//function to enact when registering a click
function onClick(event){
    let color = event.target.getAttribute("data-color");
    event.target.style.backgroundColor = color;
}
