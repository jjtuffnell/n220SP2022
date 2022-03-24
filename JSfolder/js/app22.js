//Josh Tuffnell
//n220
//March 24th 2022

//pull enterted info from username and password
var username = document.getElementById("username");
var password = document.getElementById("password");
//message box that checks info
let div = document.getElementById("check");

//function to check for valid username and password
function login(){
    if(username.value == "Username" && password.value == "Password"){
        div.innerHTML = "Success!"; //correct info
    } else {
        div.innerHTML = "Wrong information"; //incorrect info
    }
}