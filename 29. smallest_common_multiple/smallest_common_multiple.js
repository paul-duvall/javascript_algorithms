// Accepts an array of 2 numbers and calculates the smallest common multiple of those numbers and each integer between them

function smallestCommons(arr) {
  let completeArr = [], isMultiple = false;
  let counter = 0;
  
  // Sort the numbers into order
  arr.sort(function(a,b){return a - b});
  
  // Create an array containing each number and all the integers in between then reverse the array
  for(let j = arr[0]; j <= arr[1]; j++){completeArr.push(j);}
  completeArr.reverse();

  // Establish a starting number by multiplying the largest digits together
  let currentNumber = completeArr[0] * completeArr[1];

  // Continue to check numbers whilst the current number is not a multiple of a number in the array
  while(isMultiple === false){
    // Loop through the array, checking that the current number is divisible by each item
    for(let i = 0; i < completeArr.length; i++){
      if(currentNumber % completeArr[i] === 0){
        isMultiple = true;
      } else {
        isMultiple = false;
        currentNumber = completeArr[0] * (completeArr[1] + counter);
        counter++;
        break;
      }
    }
  }
  console.log(currentNumber);
  return currentNumber;
}

// smallestCommons([1,5]);
// smallestCommons([2, 10]);
// smallestCommons([1, 13]);
smallestCommons([23, 18]);