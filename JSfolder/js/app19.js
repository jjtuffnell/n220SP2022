//Josh Tuffnell
//March 3rd 2022

//declare divs
let life = document.getElementById("life");
let you = document.getElementById("you");
let them = document.getElementById("them");

//start computer at 0
let computerNum = 0;

//start your own score at 0
let lifeNum = 0;
life.innerHTML = life.innerHTML;

you.innerHTML = "";
them.innerHTML = "";

function change1(){
    computerNum = Math.floor(Math.random() * 3);
    if(computerNum === 0){
        life.innerHTML == lifeNum;
        you.innerHTML = "Rock";
        them.innerHTML = "Rock";
    } else if(computerNum === 1){
        lifeNum -= 1;
        life.innerHTML = lifeNum;
        you.innerHTML = "Rock";
        them.innerHTML = "Paper";
    } else if(computerNum === 2){
        lifeNum += 1;
        life.innerHTML = lifeNum;
        you.innerHTML = "Rock";
        them.innerHTML = "Scissors";
    }
}
function change2(){
    computerNum = Math.floor(Math.random() * 3)
    if(computerNum === 0){
        lifeNum += 1;
        life.innerHTML = lifeNum;
        you.innerHTML = "Paper";
        them.innerHTML = "Rock";
    } else if(computerNum === 1){
        life.innerHTML = lifeNum;
        you.innerHTML = "Paper";
        them.innerHTML = "Paper"
    } else if(computerNum === 2){
        lifeNum -= 1;
        life.innerHTML = lifeNum;
        you.innerHTML = "Paper";
        them.innerHTML = "Scissors";
    }
}
function change3(){
    computerNum = Math.floor(Math.random() * 3)
    if(computerNum === 0){
        life.innerHTML -= 1;
        life.innerHTML = lifeNum;
        you.innerHTML = "Scissors";
        them.innerHTML = "Rock";
    } else if(computerNum === 1){
        lifeNum += 1;
        life.innerHTML = lifeNum;
        you.innerHTML = "Scissors";
        them.innerHTML = "Paper";
    } else if(computerNum === 2){
        life.innerHTML = lifeNum;
        you.innerHTML = "Scissors";
        them.innerHTML = "Scissors";
    }
}
function change4(){
    lifeNum -= 0.5
    life.innerHTML = lifeNum;
    you.innerHTML = "Guard";
}
