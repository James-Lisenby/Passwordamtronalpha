var generateBtn = document.getElementById("#generate");



var letterssmall = 'abcdefghijklmnopqrstuvwxyz' .split('');
var lettersbig = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' .split('');
var numbers = '123456789' .split('');
var special = '©$¢‰@÷ƒ#‘❝≈~Ω' .split('');


function generatePassword(){

    var password = "";
    var passwordChar ="";

    var passwordlength = prompt("Password must be between 8-128 characters.")
    passwordlength = parseInt(passwordlength);

    if(passwordlength < 8){
        alert("Password is too short!");
        return "";
    }

    if(passwordlength > 128){
        alert("Password is too long!");
        return "";
    }

    var letterssmall = confirm("Would you like to use lowercase letters?");

    if(letterssmall) {
        passwordchar += letterssmall;
    }

    var lettersbig = confirm("Would you like to use uppercase letter?")

    if(lettersbig){
        passwordchar += lettersbig;
    }

    var numbers = confirm("Would you like to use numbers?")

    if(numbers){
        passwordchar += numbers;
    }

    var special = confirm("Would you like to use special characters?");

    if(special){
        passwordchar =+ special;
    }

    