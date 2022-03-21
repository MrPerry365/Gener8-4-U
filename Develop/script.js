// Assignment code here

// add character options
var characterChoice = {
  special:'[!#$%&()*+-./:;<=>?@^{|}~]',
  number:'0123456789',
  upperCase:'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowerCase:'abcdefghijklmnopqrstuvwxyz',
};

// add function to generate the password

function generatePassword() {
  console.log('hello hello')
// define password length
  var pwdLength = prompt("Pick a number between 8 and 128 for your password!")

}


// prompt character choices
// take character choices and randomize
// turn randomized character choices into password

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
