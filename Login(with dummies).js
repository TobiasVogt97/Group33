function validate() {
    // un = username, pw = password
    var usernameArray = ["Frederik", "Hector", "Tobias", "Hedda"];
    var passwordArray = ["12345", "123", "kodeord123", "9876"];
    var un = document.getElementById('Brugernavn');
    var pw = document.getElementById('Adgangskode');
    var validate = false;
    for (var i = 0; i < usernameArray.length; i++) //Loop for username- og password array
    {
        if ((un.value == usernameArray [i]) && (pw.value == passwordArray[i])) {
            validate = true;
            break; //hvis den finder en un + pw kombination der passer, eller der ikke er nogen slutter den looped.
        }
    }
    if (validate == true) {
        alert("Login was successful");
        window.location = 'LoggedInIndex.html';  // Succesfuld login -> gå til anden website
    } else {
        alert("Incorrect password or username");
    }
}

object.onclick = validate()
