//Josh Tuffnell
//April 7th 2022

let userNum = document.getElementById("userNum");
let update = document.getElementById("update");
//function that checks if user number is divisible by 7
function seven(){
    let num = userNum.value
    if(num %7==0)return ("true");
    else return ("false")
}
//function that returns true or false
function results(){
    let res = seven()
    update.innerHTML = res
}