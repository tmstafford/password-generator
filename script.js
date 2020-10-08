// Assignment code here

// password criteria variables
var lowerCase = ("abcdefghijklmnopqrstuvwxyz");
var upperCase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
var numericChar = ("123456789");
var specialChar = ("!#$%&'()*+,-./:;<=>?@[]^_|~");

var passwordChar = "";
var randomPassword = "";



// User Prompts

// make length a function and add to generatePassword ()
var length = window.prompt("How long do you want your password? Choose between 8 and 128 characters.");

if (length < 8 || length > 128) {
  window.alert("Your password must be between 8 and 128 characters. Please try again.");
  return;
}

// make these confirms a function and add to generatePassword ()
var confirmLowerCase = window.confirm("Do you want to include lowercase characters?");
var confirmUpperCase = window.confirm("Do you want to include uppercase characters?");
var confirmNumericChar = window.confirm("Do you want to include numeric characters?");
var confirmSpecialChar = window.confirm("Do you want to include special characters?");

// if at least one character type isn't confirmed, can not proceed
if (!confirmLowerCase && !confirmUpperCase && !confirmNumericChar && !confirmSpecialChar) {
  window.alert("Your password must contain at least one character type. Please try again.");
  return;
}

var generatePassword = function() {

  // add length function (after making it one??)

  // add confirm character function (after making it one??)
  // so that rest of this function can continue to make correct random password

  if (confirmLowerCase && confirmUpperCase && confirmNumericChar && confirmSpecialChar) {
    passwordChar = confirmLowerCase + confirmUpperCase + confirmNumericChar + confirmSpecialChar;
  }
  else if (confirmLowerCase && confirmUpperCase && confirmNumericChar) {
    passwordChar = confirmLowerCase + confirmUpperCase + confirmNumericChar;
  }
  else if (confirmLowerCase && confirmUpperCase && confirmSpecialChar) {
    passwordChar = confirmLowerCase + confirmUpperCase + confirmSpecialChar;
  }
  else if (confirmLowerCase && confirmNumericChar && confirmSpecialChar) {
    passwordChar = confirmLowerCase + confirmNumericChar + confirmSpecialChar;
  }
  else if (confirmUpperCase && confirmNumericChar && confirmSpecialChar) {
    passwordChar = confirmUpperCase + confirmNumericChar + confirmSpecialChar;
  }
  else if (confirmNumericChar && confirmSpecialChar) {
    passwordChar = confirmNumericChar + confirmSpecialChar;
  }
  else if (confirmUpperCase && confirmSpecialChar) {
    passwordChar = confirmUpperCase + confirmSpecialChar;
  }
  else if (confirmUpperCase && confirmNumericChar) {
    passwordChar = confirmUpperCase + confirmNumericChar;
  }
  else if (confirmLowerCase && confirmSpecialChar) {
    passwordChar = confirmLowerCase + confirmSpecialChar;
  }
  else if (confirmLowerCase && confirmNumericChar) {
    passwordChar = confirmLowerCase + confirmNumericChar;
  }
  else if (confirmLowerCase && confirmUpperCase) {
    passwordChar = confirmLowerCase + confirmUpperCase;
  }
  else if (confirmLowerCase) {
    passwordChar = confirmLowerCase;
  }
  else if (confirmUpperCase) {
    passwordChar = confirmUpperCase;
  }
  else if (confirmNumericChar) {
    passwordChar = confirmNumericChar;
  }
  else if (confirmSpecialChar) {
    passwordChar = confirmSpecialChar;
  }

  // for loop for actually generating password? 
  for (var i = 0; i < length; i++) {
    randomPassword = passwordChar.charAt(Math.floor(Math.random() * passwordChar.length));
  }
  return randomPassword;

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
