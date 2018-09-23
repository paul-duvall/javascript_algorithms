// Remove all elements from the array in the first argument that are of the same value as any number of additional arguments.

function destroyer(arr) {

  // Set a new array containing the function's arguments
  let argumentsArr = Array.prototype.slice.call(arguments);
  // Remove the first argument, namely the sub-array
  argumentsArr.shift();
  
  // loop through the argumentsArr once for each argument
  for(i = 0; i < argumentsArr.length; i++){
    // For each argument, filter through the arr, returning only numbers that do not match the current argument
    arr = arr.filter(function(num){
      if(num !== argumentsArr[i]) {
      return num;
      }
    });
  }
  console.log(arr);
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);