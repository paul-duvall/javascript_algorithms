// Replaces a single word from a string with another word

function myReplace(str, before, after) {
  
  // Declare variable for checking for capital letter
  let capitalRegex = /^[A-Z]/;

  // Split string into array and declare variable to hold the index of the word to be changed
  let stringArray = str.split(' ');
  let indexOfWord = stringArray.indexOf(before);
  

  // Check to see if the word needs to be capitalised
  if(capitalRegex.test(stringArray[indexOfWord])) {
    // Capitalise the word to be added
    after = after.charAt(0).toUpperCase() + after.slice(1); 
  }
  
  // Replace word and change the array back into a string
  stringArray[indexOfWord] = after;
  str = stringArray.join(' ');
  
  return str;
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");