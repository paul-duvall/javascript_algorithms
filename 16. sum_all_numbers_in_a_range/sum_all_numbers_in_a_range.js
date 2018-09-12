// Returns the sum of two numbers plus all of the numbers between them.

function sumAll(arr) {
// Declare variables for each number in the array
let numberOne = arr[0];
let numberTwo = arr[1];

// Compare the numbers and return an array where numbers are sorted
let orderedNumbers = arr.sort(function(numberOne, numberTwo){
  return numberOne - numberTwo
});

// Create an array of the numbers plus all the integers in between
let completeArr = [];

for(let i = orderedNumbers[0]; i <= orderedNumbers[1]; i++ ){
  completeArr.push(i);
}

// Sum all the numbers in the array
const numbersSum = completeArr.reduce(function(total, number){
  return total + number;
});

return numbersSum;
}

sumAll([10, 8]);

