//Josh Tuffnell
//April 14th 2022

//declare divs
let win = document.getElementById("win");
let find = document.getElementById("find");

function winner(){
    var string = win.value
    let myArray = string.split(",");
    check();
}
function check(){
    var string = win.value
    let myArray = string.split(",");
    let count = 0;
    for(let i = 0 ; i < myArray.length; i++){
        if(myArray[i] == 1){
            count++;
        }else{
            count = 0;
        }
        if(count == 3){
            find.innerHTML = "winner"
        }else if(count < 3 && myArray.length - 1 == i){
            find.innerHTML = "not winner"
        };
    };
}