//create div
let box = document.getElementById("box");

let sound = "";

for(let n = 1; n <= 25; n++){ //loops 25 times

if(n % 3 == 0){ //check if divisible by 3
    sound += "beep <div/>";
    box.innerHTML = sound;
    
} else if(n % 5 == 0){ //check if divisble by 5
    sound += "bop <div/>";
    box.innerHTML = sound;
    
} else if(n % 5 != 0 && n % 3 != 0){
    sound += "beepbop <div/>"; //checks for both
    box.innerHTML = sound;
}
};