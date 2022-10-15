// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

// variables from prompt 

var characterLength = prompt("How Many Characters? minimum,8 maximum, 128")
var lowerCase = confirm("Include Lowercase?")
var upperCase = confirm("Include Uppercase?")
var numbers = confirm("Include Numbers?")
var specialCharacters = confirm("Include Special Characters?")

// arrays 

var lowerCaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var upperCaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var numberArray = ["0","1","2","3","4","5","6","7","8","9"];

var specialCharacterArray = ["@","#","$","%","^","&","*","(",")","-","_","=","+"];

// empty array

var endArray = [];
var emptyArray = [];

//conditionals
// if (characterLength <= "8", characterLength >= "128") {
//     alert("please enter a valid number");
// }

if (lowerCase) {
  endArray = endArray.concat(lowerCaseArray);
}

if (upperCase) {
  endArray = endArray.concat(upperCaseArray);
}

if (numbers) {
  endArray = endArray.concat(numberArray);
}

if (specialCharacters) {
  endArray = endArray.concat(specialCharacterArray);
}

for (var i = 0; i < characterLength; i++) {
  emptyArray.push (endArray[Math.floor(Math.random() * endArray.length)]);
}

if (characterLength > "128") {
  alert("PLEASE ENTER A VALID NUMBER");
  return;
}


return emptyArray.join("");
}

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

