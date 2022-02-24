//create div
let box = document.getElementById("box");
//loops numbers 1000,2000,3000,4000,5000
//one line of code inside loop
for(var n = 1; n <= 25; n++){
box.innerHTML += n;
if(n % 3 === 0){
    box.innerHTML += "beep <br/>";
    console.log(n);
    console.log("yes");
} else if(n % 5 === 0){
    box.innerHTML += "bop <br/>";
    console.log(n);
    console.log("yes");
} else if(n % 5 === 0 && n % 3 === 0){
        box.innerHTML += "beepbop <br/>";
        console.log(n);
        console.log("YES");
    } else
    box.innerHTML += "</br>";
    console.log(n);
    console.log("no");
}