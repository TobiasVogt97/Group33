function validate() {
    // un = username, pw = password
    var un = document.getElementById('Brugernavn');
    var pw = document.getElementById('Adgangskode');
    var userinfo = un.value+pw.value;
    var valid = false;
    var userData = localStorage.getItem('TheTrueStoryOfLocalStorage');
    var Users = userData.split(',');

    for (var i = 0; i < Users.length; i++) //Loop for username- og password array
    {
        if (userinfo == Users[i]) {
            valid = true;
            break; //hvis den finder en un + pw kombination der passer, eller der ikke er nogen slutter den looped.
        }
    }
    if (valid === true) {
        alert("Login was successful");
        window.location = 'LoggedInIndex.html';  // Succesfuld login -> gå til anden website
    } else {
        alert("Incorrect password or username");
    }
}