(function () {
    "use strict";
  
    window.validateField = function (input, iconId) {
      const icon = document.getElementById(iconId);
      if (input.checkValidity()) {
        icon.src = "yes.jpeg";
      } else {
        icon.src = "no.jpeg";
      }
    }
  
    window.validateForm = function () {
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
  
      validateField(nameInput, 'name-icon');
      validateField(emailInput, 'email-icon');
  
      return nameInput.checkValidity() && emailInput.checkValidity();
    }
  })();