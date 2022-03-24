//Josh Tuffnell
//n220
//Mar 24th 2022

let textName = document.getElementById("textName");
let nameResult = document.getElementById("nameResult");

function generateName(){
    let userName = textName.value;
    let name = `Hello ${userName}`;
    nameResult.innerHTML = name;
    console.log(name);
};