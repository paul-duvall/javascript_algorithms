// Find the missing letter in the passed letter range and returns it

function fearNotLetter(str) {
  
  // Declare variables for the current letter and next letter
  // Declare a variable to hold the missing letter once found
  let currentLetter, nextLetter, missingLetter;

  // Loop through each letter in the string, checking to see if it has a missing letter after it
  for(let i = 0; i < str.length - 1; i++) {
    // Get ASCII codes for current letter and next letter
    currentLetter = str.charCodeAt(i);
    nextLetter = str.charCodeAt(i + 1);
    
    // If the current letter has the missing letter after it, return the missing letter
    if(nextLetter - currentLetter !== 1) {
      missingLetter = String.fromCharCode(nextLetter - 1);
      return missingLetter;
    }    
  }
  // Return undefined if there is no missing letter
  return missingLetter;
}

fearNotLetter("abcdefghijklmnopqrstuvwxyz"); // Returns undefined
fearNotLetter("abce"); // Returns d