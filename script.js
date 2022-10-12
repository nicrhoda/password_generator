// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

// variables from prompt 

var characterLength = prompt("How Many Characters? minimum,8 maximum, 128")
var lowerCase = prompt("Include Lowercase? y or n")
var upperCase = prompt("Include Uppercase? y or n")
var numbers = prompt("Include Numbers? y or n")
var specialCharacters = prompt("Include Special Characters? y or n")

// arrays 

var lowerCaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var upperCaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var numberArray = ["0","1","2","3","4","5","6","7","8","9"];

var specialCharacterArray = ["@","#","$","%","^","&","*","(",")","-","_","=","+"];

// empty array

var endArray = [];
var emptyArray = [];

//conditionals

if (lowerCase = "y") {
  endArray = endArray.concat(lowerCaseArray);
}
else if (lowerCase = "n") {
  endArray; 
}
else if (lowerCase != "y","n") {
  alert("please try again and select valid option");
}

if (upperCase = "y") {
  endArray = endArray.concat(upperCaseArray);
}

if (numbers = "y") {
  endArray = endArray.concat(numberArray);
}

if (specialCharacters = "y") {
  endArray = endArray.concat(specialCharacterArray);
}

for (var i = 0; i < characterLength; i++) {
  emptyArray.push (endArray[Math.floor(Math.random() * endArray.length)]);
}

return emptyArray.join("");
}

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = generateBtn.document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

