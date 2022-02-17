let newEl = document.getElementById("div");

var factor = 1.1
var h = 100
var w = 100

//customize
newEl.style.backgroundColor = "#00FF00";
newEl.innerHTML = "Hello";

newEl.style.width = w + "px";
newEl.style.height = h + "px";


//change when clicked
function change() {
    newEl.style.width = w * factor + "px";
    newEl.style.height = w * factor + "px";
    newEl.style.backgroundColor = "#FF0000";
    newEl.innerHTML = "Goodbye";
}