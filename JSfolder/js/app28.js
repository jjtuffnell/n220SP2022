//Josh Tuffnell
//April 13 2022
//declare div
let answer = document.getElementById("answer");
//function that displays answer when clicked
function display(){
    let answer = event.target.getAttribute("data-response");
    document.getElementById("answer").innerHTML = answer;
}