// Looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument)

function findElement(arr, func) {
  
  let num;
  for(i = 0; i < arr.length; i++) {
    // variable to track the value in the current position of array
    num = arr[i];
    // func checks to see if value is divisible by 2 and returns num if it is
    if(func(num)) {
      return num;
    }
  }
  return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

