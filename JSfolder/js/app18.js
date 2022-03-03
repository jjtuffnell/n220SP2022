//Josh Tuffnell
//March 2nd 2022

//declare all the divs
let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let box5 = document.getElementById("box5");
let box6 = document.getElementById("box6");
//style divs
box1.style.backgroundColor = "#FFFFFF";
box2.style.backgroundColor = "#FFFFFF";
box3.style.backgroundColor = "#FFFFFF";
box4.style.backgroundColor = "#FFFFFF";
box5.style.backgroundColor = "#FFFFFF";
box6.style.backgroundColor = "#FFFFFF";

box1.innerHTML = "Hello";
box2.innerHTML = "My";
box3.innerHTML = "Name";
box4.innerHTML = "Is";
box5.innerHTML = "Josh";
box6.innerHTML = "Tuffnell";


//functions to change each div when clicked clicked
//when div is clicked change background color and bold the innerHTML
function change1(){
    box1.style.backgroundColor = "#FF00FF";
    box2.style.backgroundColor = "#FFFFFF";
    box3.style.backgroundColor = "#FFFFFF";
    box4.style.backgroundColor = "#FFFFFF";
    box5.style.backgroundColor = "#FFFFFF";
    box6.style.backgroundColor = "#FFFFFF";

    box1.innerHTML = "<b>Hello</b>";
    box2.innerHTML = "My";
    box3.innerHTML = "Name";
    box4.innerHTML = "Is";
    box5.innerHTML = "Josh";
    box6.innerHTML = "Tuffnell";

    if(box1.style.backgroundColor = "#FF00FF"){
    box7.innerHTML += " Hello ";
    } 
}
function change2(){
    box1.style.backgroundColor = "#FFFFFF";
    box2.style.backgroundColor = "#FFFF00";
    box3.style.backgroundColor = "#FFFFFF";
    box4.style.backgroundColor = "#FFFFFF";
    box5.style.backgroundColor = "#FFFFFF";
    box6.style.backgroundColor = "#FFFFFF";
    
    
    box1.innerHTML = "Hello";
    box2.innerHTML = "<b>My</b>";
    box3.innerHTML = "Name";
    box4.innerHTML = "Is";
    box5.innerHTML = "Josh";
    box6.innerHTML = "Tuffnell";

    if(box2.style.backgroundColor = "#FFFF00"){
        box7.innerHTML += " My ";
    }
}
function change3(){
    box1.style.backgroundColor = "#FFFFFF";
    box2.style.backgroundColor = "#FFFFFF";
    box3.style.backgroundColor = "#0000FF";
    box4.style.backgroundColor = "#FFFFFF";
    box5.style.backgroundColor = "#FFFFFF";
    box6.style.backgroundColor = "#FFFFFF";
    
    
    box1.innerHTML = "Hello";
    box2.innerHTML = "My";
    box3.innerHTML = "<b>Name</b>";
    box4.innerHTML = "Is";
    box5.innerHTML = "Josh";
    box6.innerHTML = "Tuffnell";

    if(box3.style.backgroundColor = "#0000FF"){
        box7.innerHTML += " Name ";
    }

}
function change4(){
    box1.style.backgroundColor = "#FFFFFF";
    box2.style.backgroundColor = "#FFFFFF";
    box3.style.backgroundColor = "#FFFFFF";
    box4.style.backgroundColor = "#00FFFF";
    box5.style.backgroundColor = "#FFFFFF";
    box6.style.backgroundColor = "#FFFFFF";
    
    
    box1.innerHTML = "Hello";
    box2.innerHTML = "My";
    box3.innerHTML = "Name";
    box4.innerHTML = "<b>Is</b>";
    box5.innerHTML = "Josh";
    box6.innerHTML = "Tuffnell";
    
    if(box4.style.backgroundColor = "#00FFFF"){
        box7.innerHTML += " Is ";
    } 
}
function change5(){
    box1.style.backgroundColor = "#FFFFFF";
    box2.style.backgroundColor = "#FFFFFF";
    box3.style.backgroundColor = "#FFFFFF";
    box4.style.backgroundColor = "#FFFFFF";
    box5.style.backgroundColor = "#FF0000";
    box6.style.backgroundColor = "#FFFFFF";
    
    
    box1.innerHTML = "Hello";
    box2.innerHTML = "My";
    box3.innerHTML = "Name";
    box4.innerHTML = "Is";
    box5.innerHTML = "<b>Josh</b>";
    box6.innerHTML = "Tuffnell";

    if(box5.style.backgroundColor = "#FF0000"){
        box7.innerHTML += " Josh ";
    }
    
}
function change6(){
    box1.style.backgroundColor = "#FFFFFF";
    box2.style.backgroundColor = "#FFFFFF";
    box3.style.backgroundColor = "#FFFFFF";
    box4.style.backgroundColor = "#FFFFFF";
    box5.style.backgroundColor = "#FFFFFF";
    box6.style.backgroundColor = "#FF00FF";
    
    
    box1.innerHTML = "Hello";
    box2.innerHTML = "My";
    box3.innerHTML = "Name";
    box4.innerHTML = "Is";
    box5.innerHTML = "Josh";
    box6.innerHTML = "<b>Tuffnell</b>";

    if(box6.style.backgroundColor = "#FF00FF"){
        box7.innerHTML += " Tuffnell ";
    } 
}
