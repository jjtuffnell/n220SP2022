
let dvBox = document.getElementById("box");

let size = 100;

dvBox.style.width = "100px";
dvBox.style.height = "100px";
dvBox.style.backgroundColor = "#00FF00";



function change() {

    size = size * 1.1;
    dvBox.style.width = size + "px";
    dvBox.style.height = size + "px";
    
}