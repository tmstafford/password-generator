// Assignment code here

// password criteria variables
var lowerCase = ("abcdefghijklmnopqrstuvwxyz");
var upperCase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
var numericChar = ("123456789");
var specialChar = ("!#$%&'()*+,-./:;<=>?@[]^_|~");

var length = "";
var confirmLowerCase = "";
var confirmUpperCase = "";
var confirmNumericChar = "";
var confirmSpecialChar = "";


// User Prompts

var generatePassword = function() {

  var length = window.prompt("How long do you want your password? Choose between 8 and 128 characters.");

  if (length < 8 || length > 128 || length === null || length === "") {
    window.alert("Your password must be between 8 and 128 characters. Please try again.");
    return generatePassword();
  }
    
  window.alert("Please confirm which of the following character types you would like to include in your password.");

    var confirmLowerCase = window.confirm("Click OK to confirm if you would like to include lowercase characters?");
    var confirmUpperCase = window.confirm("Click OK to confirm if you would like to include uppercase characters?");
    var confirmNumericChar = window.confirm("Click OK to confirm if you would like to include numeric characters?");
    var confirmSpecialChar = window.confirm("Click OK to confirm if you would like to include special characters?");
  
  if (!confirmLowerCase && !confirmUpperCase && !confirmNumericChar && !confirmSpecialChar) {
    window.alert("Your password must contain at least one character type. Please try again.");
    return generatePassword();
  }

  var passwordChar = "";

  // if and else statement conditions 
  if (confirmLowerCase && confirmUpperCase && confirmNumericChar && confirmSpecialChar) {
    passwordChar = lowerCase + upperCase + numericChar + specialChar;
  }
  else if (confirmLowerCase && confirmUpperCase && confirmNumericChar) {
    passwordChar = lowerCase + upperCase + numericChar;
  }
  else if (confirmLowerCase && confirmUpperCase && confirmSpecialChar) {
    passwordChar = lowerCase + upperCase + specialChar;
  }
  else if (confirmLowerCase && confirmNumericChar && confirmSpecialChar) {
    passwordChar = lowerCase + numericChar + specialChar;
  }
  else if (confirmUpperCase && confirmNumericChar && confirmSpecialChar) {
    passwordChar = upperCase + numericChar + specialChar;
  }
  else if (confirmNumericChar && confirmSpecialChar) {
    passwordChar = numericChar + specialChar;
  }
  else if (confirmUpperCase && confirmSpecialChar) {
    passwordChar = upperCase + specialChar;
  }
  else if (confirmUpperCase && confirmNumericChar) {
    passwordChar = upperCase + numericChar;
  }
  else if (confirmLowerCase && confirmSpecialChar) {
    passwordChar = lowerCase + specialChar;
  }
  else if (confirmLowerCase && confirmNumericChar) {
    passwordChar = lowerCase + numericChar;
  }
  else if (confirmLowerCase && confirmUpperCase) {
    passwordChar = lowerCase + upperCase;
  }
  else if (confirmLowerCase) {
    passwordChar = lowerCase;
  }
  else if (confirmUpperCase) {
    passwordChar = upperCase;
  }
  else if (confirmNumericChar) {
    passwordChar = numericChar;
  }
  else if (confirmSpecialChar) {
    passwordChar = specialChar;
  }

  console.log(passwordChar);

  var randomPassword = "";

  // for loop for actually generating password 
  for (var i = 0; i < length; i++) {
    randomPassword += passwordChar.charAt(Math.floor(Math.random() * passwordChar.length));
    console.log(randomPassword);
  }
  return randomPassword;

};

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


