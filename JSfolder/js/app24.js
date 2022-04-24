//Josh Tuffnell
//April 7th 2022
//nested function that calls other function
function generateNum(){
    random();
}
//function that generates random number 0-10
function random(){
    let num = Math.round(Math.random()* 10);
    document.getElementById("results").innerHTML = num
}