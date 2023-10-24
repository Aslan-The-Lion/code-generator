var numeric = "0123456789".split(""); 
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz".split("");
var specialCharacters = "!@#$%^&*()_+~`|}{[]:;?><,./-=".split("");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword() {
var chooseValues = [];
var characterAmount = prompt("choose the amount of characters for your password, choose between 8-128")
 characterAmount = parseInt (characterAmount)
 
 if (isNaN(characterAmount) || characterAmount<8 || characterAmount>128) {
  return "Invalid Selection, please choose again"
} else {
  alert (characterAmount + " characters is the amount you chose.")
 }
 letNumeric = confirm ("would you like numbers in your password?")
 letLowerCaseLetters = confirm ("would you like lowercase letters in your password?")
 letUppercaseLetters = confirm ("would you like uppercase letters in your password?")
 letSpecialCharacters = confirm ("would you like special characters in your password?")

 if (!numeric && !letLowerCaseLetters && !letUppercaseLetters && !letSpecialCharacters)
 return "choose at least one of the values"

 if (letNumeric) {
  chooseValues = chooseValues.concat (numeric)
  } if (letLowerCaseLetters) {
    chooseValues = chooseValues.concat (lowerCaseLetters)
  } if (letUppercaseLetters) {
    chooseValues = chooseValues.concat(upperCaseLetters)
  } if (letSpecialCharacters) {
    chooseValues = chooseValues.concat (specialCharacters)
  }
  
  var finalpassword = ""
  
  
for(var i = 0; i<characterAmount; i++) {
  var range = Math.ceil(Math.random()*chooseValues.length) - 1
    finalpassword += chooseValues[range]
  }
  return finalpassword
}




// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 