let total = document.getElementById("total");
let finalResult = document.getElementById("finalResult");
let tipResult = document.getElementById("tipResult");

function tipCalc(){
    let tipResult = total.value * .2
    let finalResult = total.value + tipResult;
    console.log("Tip: $" + tipResult + " Total: $" + finalResult);
}
