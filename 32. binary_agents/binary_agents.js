// ******************** BINARY AGENTS *******************
// Return an English translated sentence of a passed binary string

function binaryAgent(str) {
  // Declare an empty variable to hold the result
  result = '';
  
  // Split the string into an array, separating each binary letter
  arrayOfLetters = str.split(' ');
  
  // Loop through the array of binary letters
  arrayOfLetters.forEach(function(binaryNumber){
    // For each one, declare a variable containing the decimal value of the current binary letter
    let decimalValue = parseInt(binaryNumber, 2);
    // Work out the letter for the current decimal value and append it to the result variable
    result += String.fromCharCode(decimalValue);
  });

  console.log(result);
  return result;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");