
// Takes any given arrays and returns an array of unique items in the original order

function uniteUnique(arr) {
  // Set an array to hold all the elements of all the arrays, adding the elements of the first array.
  let totalArr = arguments[0];

  // Loop through each array passed into the function
  for(let i = 1; i < arguments.length; i++){
    
    // For each subsequent array, loop through the elements, adding them to the totalArray
    for(let j = 0; j < arguments[i].length; j++) {
      totalArr.push(arguments[i][j]);
    }
  }

  // Create a final array, comprised of only the unique elements of totalArr
  let finalArr = Array.from(new Set(totalArr));
  console.log(`The final array is ${finalArr}`);
  return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);