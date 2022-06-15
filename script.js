function generatePassword() {

  var letterssmall = 'abcdefghijklmnopqrstuvwxyz' .split('');
  var lettersbig = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' .split('');
  var numbers = '123456789' .split('');
  var special = '!@#$%^&*()_+' .split('');
  var characterchoices = [];

  passwordlength = prompt("Enter desired lenght of password between 8-128.");
  if (passwordlength < 8 || passwordlength > 128) {
    return;
  } else {
      alert("Your password will be " + passwordlength );
  }
  
  haslettersbig = confirm("Would you like to use uppercase letters?");
    if(haslettersbig) {
      var uselettersbig = alert("Uppercase letters confirmed.");
    }
    else {
      alert("Uppercase letters declined.");
    }

  hasletterssmall = confirm("Would you like to use lowercase letters?");
      if(hasletterssmall) {
        var useletterssmall = alert("Lowercase letters confirmed.");
      }  
      else {
        alert("Lowercase letters declined.");
      }

  hasnumbers = confirm("Would you like to use numbers?");
      if(hasnumbers) {
        var hasnumbers = alert("Numbers confirmed.");
      }
      else {
        alert("Numbers declined.");
      }    

  hasspecial = confirm("Would you like to use special characters?")
      if(hasspecial) {
        var hasspecial = alert("Special characters confirmed.");
      }
      else {
        alert("Special characters declined.");
      }
  
      if (haslettersbig === false && hasletterssmall === false && hasnumbers === false && hasspecial === false) {
        return "please select at least one character type!";
      };

      if (haslettersbig) {
        characterchoices = characterchoices.concat(lettersbig);
      }
      if (hasletterssmall) {
        characterchoices = characterchoices.concat(letterssmall);
      }
      if (hasnumbers) {
        characterchoices =characterchoices.concat(hasnumbers);
      }
      if (hasspecial) {
        characterchoices = characterchoices.concat(hasspecial);
      }


      let createdpassword = ""
      for (let i = 0; i < passwordlength; i++) {
        let rng = [Math.floor(Math.random() * characterchoices.length)];
        createdpassword = createdpassword + characterchoices[rng];
      }
      return createdpassword;
        }    ;


    var generateBtn = document.querySelector("#generate");

    function writepassword() {
      var password = generatePassword();
      var passwordText = document.querySelector("#password");
      passwordText.value = password;
    }

    generateBtn.addEventListener("click", writepassword);