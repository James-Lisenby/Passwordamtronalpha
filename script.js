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


var letterssmall = 'abcdefghijklmnopqrstuvwxyz' .split('');
console.log(letterssmall);

var lettersbig = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' .split('');
console.log(lettersbig);


