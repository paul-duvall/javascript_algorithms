// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

function mutation(arr) {

  // Declare variables for the first and second elements of the array
  let mainString = arr[0].toLowerCase().split("");
  let testLetters = arr[1].toLowerCase().split("");
  
  // Iterate through testLetters
  for(let i = 0; i < testLetters.length; i++) {
    //Check if each letter in testLetters is present in mainString, returning false if a letter is not present
    if(mainString.indexOf(testLetters[i]) < 0) {
      return false;
    }
  }
  // Return true if all the letters in testLetters have been found to be present in mainString
  return true;
}

mutation(["hello", "hey"]);