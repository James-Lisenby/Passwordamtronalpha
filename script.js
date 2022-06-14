// Character arrays
var letterssmall = 'abcdefghijklmnopqrstuvwxyz' .split('');
var lettersbig = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' .split('');
var numbers = '123456789' .split('');
var special = '!@#$%^&*()_+' .split('');

// Task to be done
// Generate Password
function generatePassword() {
    prompt("Pick between 8-128 characters.");
    // store answer in variable

}






// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



