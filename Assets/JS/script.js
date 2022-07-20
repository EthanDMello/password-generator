// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// preset arrays with special characters, uppercase, lowercase and numeric values
var specialAr = [
  "+",
  "-",
  "&",
  "|",
  "!",
  "(",
  ")",
  "{",
  "}",
  "[",
  "]",
  "^",
  "~",
  "*",
  "?",
  ":",
  '"',
  "\\",
];
var numericAr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var uppercaseAr = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowercaseAr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
console.log(numericAr, lowercaseAr, uppercaseAr, specialAr);
// function to generate password
function generatePassword() {
  // generate input, check for valid inputs
  var length = prompt("Choose length: ");
  while (length < 8 || length > 128) {
    length = prompt("you must choose a length between 8 and 128: ");
  }
  console.log(length);
  var special = confirm("Include special characters?");
  var numeric = confirm("Include numeric characters?");
  var uppercase = confirm("Include uppercase characters?");
  var lowercase = confirm("Include lowercase characters?");
  console.log(special, numeric, uppercase, lowercase);

  // choose what to include in generated password
  var chosenCharacters = [];
  if (special == true) {
    chosenCharacters.push(...specialAr);
  }
  if (numeric == true) {
    chosenCharacters.push(...numericAr);
  }
  if (uppercase == true) {
    chosenCharacters.push(...uppercaseAr);
  }
  if (lowercase == true) {
    chosenCharacters.push(...lowercaseAr);
  }
  console.log(chosenCharacters);
  // create array which holds all the characters for the generated password
  // push characters based on above variables selections.
  var newPassword = [];
  for (let i = 0; i < length; i++) {
    newPassword.push(
      chosenCharacters[Math.floor(Math.random() * chosenCharacters.length)]
    );
  }
  // convert array to string with no spaces
  newPasswordStr = newPassword.join("");
  console.log(newPasswordStr);
  return newPasswordStr;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
