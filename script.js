function generatePassword() {
  // Big daddy function. Starts the chain. 
  var letterssmall = 'abcdefghijklmnopqrstuvwxyz' .split('');
  var lettersbig = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' .split('');
  var numbers = '123456789' .split('');
  var special = '!@#$%^&*()_+' .split('');
  var characterchoices = [];
  // Character variables

  passwordlength = prompt("Enter desired lenght of password between 8-128.");
  if (passwordlength < 8 || passwordlength > 128) {
    return;
  } else {
      alert("Your password will be " + passwordlength  + "characters long" );
  }
    // Getting passwords total length.
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
        var usenumbers = alert("Numbers confirmed.");
      }
      else {
        alert("Numbers declined.");
      }    

  hasspecial = confirm("Would you like to use special characters?");
      if(hasspecial) {
        var usespecial = alert("Special characters confirmed.");
      }
      else {
        alert("Special characters declined.");
      }
        // Prompts for character selections.


      if (haslettersbig === false && hasletterssmall === false && hasnumbers === false && hasspecial === false) {
        return "please select at least one character type!";
      };
        // If all charcter types are declined, return message is sent. 
      if (haslettersbig) {
        characterchoices = characterchoices.concat(lettersbig);
      }
      if (hasletterssmall) {
        characterchoices = characterchoices.concat(letterssmall);
      }
      if (hasnumbers) {
        characterchoices =characterchoices.concat(numbers);
      }
      if (hasspecial) {
        characterchoices = characterchoices.concat(special);
      }
        // The code above combines the selected characters into the "character choice array".

      let createdpassword = ""
      for (let i = 0; i < passwordlength; i++) {
        let rng = [Math.floor(Math.random() * characterchoices.length)];
        createdpassword = createdpassword + characterchoices[rng];
      }
      return createdpassword;
        }    ;
        // Selects the randomized password character from selected arrays and combines into the final password.

    var generateBtn = document.querySelector("#generate");
      //Button Id selector.


    function writepassword() {
      var password = generatePassword();
      var passwordText = document.querySelector("#password");
      passwordText.value = password;
    }
     // The actual code to write the password to the text box.


    generateBtn.addEventListener("click", writepassword);
      // Even lisenter - click.

