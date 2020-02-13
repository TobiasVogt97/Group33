class contactForm {
    constructor (navn, emne, email, telefon, besked) {
        var navn = document.getElementById("Navn").value;
        var emne = document.getElementById("Emne").value;
        var email = document.getElementById("Email").value;
        var telefon = document.getElementById("Telefon").value;
        var besked = document.getElementById("Besked").value;
        var send = document.getElementById("Send").value;
        var error_message = document.getElementById("errorMessage");
        var text = text

    }
}
navn = true;
emne = true;
email = true;
telefon = true;
besked = true;


function validate() {

    if (navn.length < 2) {
        var text = "Please Enter More Than 3 Digits";
        error_message = text;
        navn = false;
    }
    if (emne.length < 3) {
        var text = "Please Enter More Than 3 Characters";
        error_message = text;
        emne = false;
    }

    if (email.length < 6) {
        var text = "Please Enter More Than 3 Characters";
        error_message = text;
        email = false;
    }

    if (telefon.length < 8) {
        var text = "Please Enter Valid Email";
        error_message = text;
        telefon = false;
    }
    if (besked.length > 300) {
        var text = "Please Enter 300 Character or Less";
        error_message = text;
        besked = false;
    }

    if (navn == false || emne == false || email == false || telefon == false || besked == false) {alert("Fejl")
    }

    else {
        window.location = 'emailsent.html'
    }
}