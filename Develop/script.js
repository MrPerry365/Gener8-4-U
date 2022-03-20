// Assignment code here

// add character options
// add function to generate the password
// define password length
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
