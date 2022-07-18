// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var length = prompt("Choose length: ");
  var special;
  var numeric;
  var uppercase;
  var lowercase;

  // create array which holds all the characters for the generated password
  // push characters based on above variables selections.
  generatePAssword = [];
  return "two two";
}

// Add event listener to generate button
generateBtn.addEventListener("click");
