// DNA Pairing algorithm takes each element, gets its pair, and returns the resultant two-element array to a new array

function pairElement(str) {
  
  // Declare variables for the final array and the current subarray being generated
  let finalArray = [], currentArray = [];
  // Turn the string into an array
  str = str.split('');

  // For each element of the array, create a new sub-array within finalArray
  str.forEach(function (currentChar) {
    currentArray.push(currentChar);
    finalArray.push(currentArray);
    currentArray = [];
  });

  // For each sub-array within finalArray, add the second character in the pair
  finalArray.forEach(function (array) {
    if(array[0] === 'C') {
      array.push('G');
    } else if(array[0] === 'G') {
      array.push('C');
    } else if(array[0] === 'T') {
      array.push('A');
    } else if(array[0] === 'A') {
      array.push('T');
    }
  });

  console.log(finalArray);
  return finalArray;
}

pairElement("ATCGA");
