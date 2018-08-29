// Returns the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.

function getIndexToIns(arr, num) {
  
  // Sort the array from largest to smallest integer.
  arr = arr.sort(function(a,b) {
    return a - b;
  });
  
  // Iterate through array and return the index at which the value (num) is greater than or equal to the current value in that place.
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) 
      return i;  
  }
  return arr.length;
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 35));