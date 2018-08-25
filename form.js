/*
    snoot.js
    Form validation sode for snoot.html

    Author: Heather Bente
    Date: 6 August 2018
*/

"use strict";

var formValidity = true;

// function to validate
function validateFields(fieldsetId) {

    var inputElements = document.querySelectorAll("#" + fieldsetId + " input");
    var errorDiv = document.querySelectorAll("#" + fieldsetId + " .errorMessage")[0];
    var fieldsetValidity = true;
    var elementCount = inputElements.length;
    var currentElement;
    try {

        // loop thru the input fields looking for blanks
        for (var i = 0; i < elementCount; i++) {

            currentElement = inputElements[i];
            // blanks
            if (currentElement.value === "") {
                currentElement.style.background = "rgb(255,233,233)";
                fieldsetValidity = false;
            }
            // not blanks
            else {
                currentElement.style.background = "white";
            }
            // validate select list field
            currentElement = document.querySelectorAll("#" + fieldsetId + " select")[0];
            if (currentElement.selectedIndex === -1) {
                currentElement.style.border = "1px solid red";
                fieldsetValidity = false;
            }
            else {
                currentElement.style.border = "";
            }
        }
            // action for invalid fieldset
            if (fieldsetValidity === false) {
                if (fieldsetId === "billingAddress") {
                    throw "Please complete all billing address informtation.";
                }
                else {
                    throw "Please complete all delivery address informtation.";
                }
            }
        else {
            errorDiv.style.display = "none";
            errorDiv.innerHTML = "";
        }
        }
    catch(msg) {
        // alert("catch message");
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        formValidity = false;
    }
}
//  alert("this function successfully was called and ran up until here")

// function to validate delivery date
function validateDeliveryDate() {
    var selectElements = document.querySelectorAll("#deliveryDate" + " select");
    var errorDiv = document.querySelectorAll("#deliveryDate" + " .errorMessage")[0];
    var fieldsetValidity = true;
    var elementCount = selectElements.length;
    var currentElement;

    try {

        // loop thru the select fields looking for blanks
        for (var i = 0; i < elementCount; i++) {

            currentElement = selectElements[i];
            // blanks
            if (currentElement.selectedIndex === -1) {
                // debugger;
                currentElement.style.border = "1px solid red";
                fieldsetValidity = false;

            }
            // not blanks
            else {
                currentElement.style.border = "";
            }
            // validate select list field
            currentElement = document.querySelectorAll("#deliveryDate" + " select")[0];
            if (currentElement.selectedIndex === -1) {
                currentElement.style.border = "1px solid red";
                fieldsetValidity = false;
            }
            else {
                currentElement.style.border = "";
            }
        }
            // action for invalid fieldset
            if (fieldsetValidity === false) {
               // alert("if message for throw message");
                throw "Please specify a delivery date.";
            }
            else {
                errorDiv.style.display = "none";
                errorDiv.innerHTML = "";
            }
        }
    catch(msg) {
//       alert("catch message");
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        formValidity = false;
    }
}

// function to validate payment
function validatePayment() {
    // alert("this function successfully was called and ran up until here");
    var ccNumElement = document.getElementById("ccNum");
    var selectElements = document.querySelectorAll("#paymentInfo" + " select");
    var errorDiv = document.querySelectorAll("#paymentInfo" + " .errorMessage")[0];
    var fieldsetValidity = true;
    var cvvElement = document.getElementById("cvv");
    var cards = document.getElementsByName("PaymentType");
    var elementCount = selectElements.length;
    var currentElement;
    try {
        // validate radio buttons
        if (!cards[0].checked && !cards[1].checked && !cards[2].checked && !cards[3].checked) {
            for (var i = 0; i < cards.length; i++) {
                cards[i].style.outline = "1px solid red";
            }
        }
        else {
            for (var i = 0; i < cards.length; i++) {
                cards[i].style.outline = "";
            }
        }
        // validate credit card number
        if (ccNumElement.value === "") {
            ccNumElement.style.background = "rgb(255,233,233)";
            formValidity = false;
        }
        else {
            ccNumElement.style.background = "white";
        }
        // validate expiration date
        for (var i = 0; i < elementCount; i++) {
            currentElement = selectElements[i];
            // blanks
            if (currentElement.selectedIndex === -1) {
                currentElement.style.border = "1px solid red";
                formValidity = false;
            }
            else {
                currentElement.style.border = "";
            }
        }
        // validate cvv number
        if (cvvElement.value === "") {
            cvvElement.style.background = "rgb(255,233,233)";
            formValidity = false;
        }
        else {
            ccNumElement.style.background = "white";
        }
                    // action for invalid fieldset
        if (fieldsetValidity === false) {
                throw "Please complete payment info.";
            }
        else {
            errorDiv.style.display = "none";
            errorDiv.innerHTML = "";
        }
        }
    catch(msg) {
        // alert("catch message");
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        formValidity = false;
    }
  }

function validateCreateAccount() {
    var errorDiv = document.querySelectorAll("#createAccount" + " .errorMessage")[0];
    var usernameElement = document.getElementById("username");
    var pass1Element = document.getElementById("pass1");
    var pass2Element = document.getElementById("pass2");
    var invColor = "rgb(255,233,233)";
    var passwordMismatch = false;
    var fieldsetValidity = true;
    usernameElement.style.background = "white";
    pass1Element.style.background = "white";
    pass2Element.style.background = "white";
    errorDiv.style.display = "none";
    errorDiv.innerHTML = "";
    try {
        if (usernameElement.value !== "" && pass1Element.value !== "" && pass2Element.value !== "") { // one or more fields has data
            if (pass1Element.value !== pass2Element.value) {
                // verify passwords match
                throw "Passwords entered do not match, please re-enter.";
            }
        }
        else if (usernameElement.value === "" && pass1Element.value === "" && pass2Element.value === "") { // no fields have data
            fieldsetValidity = true;
            passwordMismatch = false;
        }
        else {
            fieldsetValidity = false;
            throw "Please enter all fields to create account.";
        }
    }
    catch(msg) {
//       alert("catch message");
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        pass1Element.style.background = invColor;
        pass2Element.style.background = invColor;
        formValidity = false;
        if (passwordMismatch) {
            usernameElement.style.background = "white";
        }
        else {
            usernameElement.style.background = invColor;
        }
    }
}


// function to validate entire form
function validateForm(evt) {
//    alert("submit event");
//    alert("validateForm function was called");
    if (evt.preventDefault) {
        evt.preventDefault();
    }
    else {
        evt.returnValue = false;
    }

    formValidity = true;

    validateAddress("billingAddress");
    validateAddress("deliveryAddress");
    validateDeliveryDate();
    validatePayment();
    validateMessage();
    validateCreateAccount();

    if (formValidity === true) { // form is valid
        document.getElementById("errorText").innerHTML = "";
        document.getElementById("errorText").style.display = "none";
        document.getElementsByTagName("form")[0].submit();
    }
    else {
        document.getElementById("errorText").innerHTML = "Please fix the indicated problems and then resubmit your order.";
        document.getElementById("errorText").style.display = "block";
    }
}

// function that sets up page on load event
function setUpPage() {
    removeSelectDefaults();
    setUpDays();
    createEventListeners();
}

// function to create our event listeners
function createEventListeners() {
    var deliveryMonth = document.getElementById("delivMo");
    if (window.addEventListener) {
        deliveryMonth.addEventListener("change", updateDays, false);
    }
    else if (deliveryMonth.attachEvent) {
        deliveryMonth.attachEvent("onchange", updateDays);
    }
     var deliveryYear = document.getElementById("delivYr");
    if (deliveryYear.addEventListener) {
        deliveryYear.addEventListener("change", updateDays, false);
    }
    else if (deliveryYear.attachEvent) {
        deliveryYear.attachEvent("onchange", updateDays);
    }
    var messageBox = document.getElementById("customText");
    if (messageBox.addEventListener) {
        // alert("if statement for aCC works");
        messageBox.addEventListener("change", autoCheckCustom, false);
    }
    else if (messageBox.attachEvent) {
        messageBox.attachEvent("onchange", autoCheckCustom);
    }
    var same = document.getElementById("sameAddr");
    if (same.addEventListener) {
        same.addEventListener("change", copyBillingAddress, false);
    }
    else if (same.attachEvent) {
        same.attachEvent("onchange", copyBillingAddress);
    }
    var form = document.getElementsByTagName("form")[0];
    if (form.addEventListener) {
        // console.log("if statement for validate form listener worked");
        form.addEventListener("submit", validateForm, false);
    }
    else if (form.attachEvent) {
        form.attachEvent("onsubmit", validateForm, false);
    }
}

// function that sets up list of days based on selected month
function updateDays() {
    var deliveryDay = document.getElementById("delivDy");
    var dates = deliveryDay.getElementsByTagName("option");
    var deliveryMonth = document.getElementById("delivMo");
    var deliveryYear = document.getElementById("delivYr");
    // cover for no month selected
    if (deliveryMonth.selectedIndex === -1) {
        return;
    }
    var selectedMonth = deliveryMonth.options[deliveryMonth.selectedIndex].value;
    while (dates[28]) {
        deliveryDay.removeChild(dates[28]);
    }
    if (deliveryYear.selectedIndex === -1) {
        deliveryDay.selectedIndex = 0;
    }

// if feb and 2020 twentyNine
if (selectedMonth === "2" && deliveryYear.options[deliveryYear.selectedIndex].value === "2020") {
    deliveryDay.appendChild(twentyNine.cloneNode(true));
}

// else if 30 day month thirty
else if (selectedMonth === "4" || selectedMonth === "6" || selectedMonth === "9" || selectedMonth === "11") {
    deliveryDay.appendChild(thirty.cloneNode(true));
}

// else if 31 day month thirtyOne
else if (selectedMonth === "1" || selectedMonth === "3" || selectedMonth === "5" || selectedMonth === "7" || selectedMonth === "8" || selectedMonth === "10" || selectedMonth === "12") {
    deliveryDay.appendChild(thirtyOne.cloneNode(true));
}
}

// else

// page load event handlers
if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
}
else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
}
