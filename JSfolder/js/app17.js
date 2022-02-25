//Josh Tuffnell
//2/24/22
let box1 = document.getElementById("box1");


//statements should read "blank is one of my favorite things"
let myArray = ["Football", "Steak", "Forrest Gump", "My fiance", "Technology"];
for(let i = 0; i < myArray.length; i++){
    box1.innerHTML += myArray[i] + " is one of my favorite things <br/>";
}
