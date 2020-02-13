//Login localStorage

var usernameInput = document.getElementById("fornavn");
var lastnameInput = document.getElementById("efternavn");
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("adgangskode");
var repeatpasswordInput = document.getElementById("gentagAdgangskode");
var submitInput = document.getElementById("Create");
var userdiv = document.getElementById("userdiv");
let username = '';
let password = '';

console.log(userdiv);
class User{
    constructor(username, password){
        this.username = username;
        this.password = password;
    }
}

usernameInput.addEventListener("keyup", (e) => {
    console.log(e);
    username = e.target.value
});

lastnameInput.addEventListener("keyup", (e) => {
    console.log(e);
    lastnameInput = e.target.value
});

emailInput.addEventListener("keyup", (e) => {
    console.log(e);
    emailInput = e.target.value
});

passwordInput.addEventListener("keyup", (e) => {
    console.log(e);
    passwordInput = e.target.value;
    password = e.target.value
});

repeatpasswordInput.addEventListener("keyup", (e) => {
    console.log(e);
    repeatpasswordInput = e.target.value
});

submitInput.addEventListener("click", (e)=>{
    if (passwordInput != repeatpasswordInput) {
        alert("Din adgangskode er gentaget forkert");
    }
    else {
        var user = new User(username, password);
        console.log(user)
    }
});

function saveToLocalStorage() {
    var newUser = username+password+",";
    var storedUsers = localStorage.getItem("TheTrueStoryOfLocalStorage");
    if (storedUsers == null) {
        storedUsers = newUser;
    }
    else {
    storedUsers = storedUsers+newUser;
    }
    localStorage.setItem("TheTrueStoryOfLocalStorage", storedUsers);
    if (passwordInput == repeatpasswordInput) {
        window.location = 'Login.html';
    }
}