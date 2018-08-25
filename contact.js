/*

Halcyon Contact JS

*/

// window.alert("hello");

/*form*/

var formValidity = true;

function setUpPage {
  alert("YEAH");
  validateForm();
}


function validateForm() {
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var phone = document.getElementById("phone");
  var select = document.getElementById("topic")
  var cust = document.getElementById("cust");
  var qcc = document.getElementById("QCC");

  if (name = "") {
    alert("Please fill out this field.");
  }

  if (email = "") {
    alert("Please fill out this field.");
  }

  if (phone = "") {
    alert("Please fill out this field.");
  }

  if (cust.value = pso) {
    alert("Please fill out this field.");
  }

  if (QCC.value = "") {
    alert("Please fill out this field.");
  }
}

window.addEventListener("submit", validateForm);
