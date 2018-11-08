// ******************** PALINDROME CHECKER *******************
// Returns true if a string is a palindrome, else returns false
// Ignores punctuation, case and spacing

function palindrome(str) {
  // Create a regex for removal of all non-alphanumerica characters
  let removalRegex = /[^A-Za-z0-9]/g;
  // Remove all non-alphanumeric characters, change all characters to lowercase where necessary
  str = str.replace(removalRegex, '').toLowerCase();
  
  // create a string containing the reverse of str
  let reverseStr = str.split("").reverse().join("");

  // Check to see if the string is the same when reversed
  if(str === reverseStr){
    // Return true if this is the case
    return true;
  }
  return false;
}


palindrome("_eye"); // should return true
// palindrome("eye");
// palindrome("race car"); //should return true.
// palindrome("not a palindrome"); //should return false.