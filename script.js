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
 var passwordCharacter = "";

// define password length
var pwdLength = prompt("Pick a number between 8 and 128 for your password!");
  if (pwdLength < 8 || pwdLength > 128) {
    return ('I SAID PICK A NUMBER BETWEEN 8 AND 128!');
  };

// prompt character choices
var special = confirm("Do you want the super secret password to have special characters it it?");
if (special) {
  passwordCharacter += characterChoice.special
};

var number = confirm("Do you want the super secret password to have numbers in it?");
if (number) {
  passwordCharacter += characterChoice.number
};

var upperCase = confirm("Do you want the super secret password to have upperCase characters in it?");
if (upperCase) {
  passwordCharacter += characterChoice.upperCase
};

var lowerCase = confirm("Do you want the super secret password to have lowerCase characters in it?");
if (lowerCase) {
  passwordCharacter += characterChoice.lowerCase
};

var password = '';
// take character choices and randomize
for(let i = 0; i < pwdLength; i++) {
  password += passwordCharacter[Math.floor(Math.random()*passwordCharacter.length)]
}
// turn randomized character choices into password
return password;
}

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
