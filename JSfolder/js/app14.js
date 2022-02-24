//create div
let box = document.getElementById("box");
box.style.backgroundColor = "#0F0FFF";
//loops numbers 1000,2000,3000,4000,5000
//one line of code inside loop

for(var n = 1000; n < 5000; n +=1000){
box.innerHTML += n + "<br/>"; 
}

console.log(n);