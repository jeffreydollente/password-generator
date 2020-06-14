// Assignment code here
// Function to generate combination of password
function generatePassword() {
  var password = '';
  var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + "abcdefghijklmnopqrstuvwxyz0123456789@#$!;";

  for (i = 1; i <= 8; i++) {
var char = Math.floor(Math.random()
* str.length + 1);

password += str.charAt(char)
  }

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

function generateBtn() {
  el.down.innerHTML = generatePassword();
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
