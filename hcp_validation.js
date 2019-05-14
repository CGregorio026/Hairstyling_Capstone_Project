"use strict";
//stricco mode

// upon loading the page, it will run the functions based on the way the user interacts with them, and then look for any discrepancies between the pages.
window.addEventListener("load", function () {
    document.getElementById("submit").onclick = runSubmit;
    document.getElementById("custName").oninput = validateName;
    document.getElementById("phone").oninput = validateNumber;
    document.getElementById("mail").oninput = validateEmail;
});
// runs the functions to endure that the form is filled out correctly before submitting the form
function runSubmit() {
    validateName();
    validateNumber();
    validateEmail();
}

function validateEmail() {
    var mail = document.getElementById("mail");
    if (mail.validity.valueMissing) {
        mail.setCustomValidity("Hey Boss, what's your email?")
    } else {
        mail.setCustomValidity("");
    }
}

function validateNumber() {
    var phone = document.getElementById("phone");
    if (phone.validity.valueMissing) {
        phone.setCustomValidity("Hey, you need your phone number here!")
    } else {
        phone.setCustomValidity("");
    }
}

//This function sets custom validation if the name is not inputted into the form. 
function validateName() {
    // looks for the name of the customer
    var custName = document.getElementById("custName");
    // checks to see if the custName input box is empty. if so, it displays a message telling the user to write their name
    if (custName.validity.valueMissing) {
          custName.setCustomValidity("Hey, you forgot to enter your name!")
    } else {
          custName.setCustomValidity("");
    }
};

