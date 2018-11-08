// ******************** CAESARS CIPHER *******************
// Decodes a string that has been encoded using the ROT13 version of Caesar's Cipher

function rot13(str) { 
  // Declare variable containing an array of the character in str
  let arr = str.split('');

  // Loop through the items in the array
  arr.forEach(function(item, index){
    // For each item, declare a variable containing the decimal value of the character
    let currentLetterValue = item.charCodeAt();
    
    if (currentLetterValue >= 65 && currentLetterValue <= 77) {
      // Executes if the currentletter is between A and M
      // Shift the current letter's value
      let newLetterValue = currentLetterValue + 13;
      // Convert to the actual letter
      let newLetter = String.fromCharCode(newLetterValue);
      // Replace the original letter with the updated letter
      arr[index] = newLetter;
    } else if (currentLetterValue >= 78 && currentLetterValue <= 90) {
      // Executes if the currentletter is between N and Z
      let newLetterValue = currentLetterValue - 13;
      let newLetter = String.fromCharCode(newLetterValue);
      arr[index] = newLetter;
    }

  });

  // console.log(arr.join(''));
  return arr.join('');
}

// Change the inputs below to test
rot13("SERR PBQR PNZC"); //should decode to FREE CODE CAMP