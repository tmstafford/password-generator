// Assignment code here

// password criteria variables
var lowerCase = ("abcdefghijklmnopqrstuvwxyz");
var upperCase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
var numericChar = ("123456789");
var specialChar = ("!#$%&'()*+,-./:;<=>?@[]^_|~");

// User Prompts
var length = window.prompt("How long do you want your password? Choose between 8 and 128 characters.");

if (length < 8 || length > 128) {
  window.alert("Your password must be between 8 and 128 characters. Please try again.");
  return
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
