// Accepts two parameters, an array of numbers and a function
// Iterates through the array, removing the first item if the function(func) returns false
// If the function(func) returns true, the function dropElements returns the array with remaining items

function dropElements(arr, func) {
    
  // Continues to loop through the array whilst the function func returns false
  while (func(arr[0]) === false){
    // For each iteration, the first item in the array is removed
    arr.shift();
    console.log(arr);
  }
  
  return arr;
}

dropElements([1, 2, 3, 4], function(n) {return n >= 3;}); // should return [3, 4]