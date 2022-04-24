//Josh Tuffnell
//April 7th, 2022

let cleanthis = document.getElementById("cleanthis");
let remove = document.getElementById("remove");

//function that removes #
function clean(){
    let userName = cleanthis.value;
    let content = `${userName}`;
    return content.replace(/#/g,"");
};
//brings out button
function bring(){
    let res = clean()
    remove.innerHTML = res
    console.log(res)

};
