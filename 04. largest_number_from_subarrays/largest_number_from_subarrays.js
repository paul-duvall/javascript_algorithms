// Returns the largest number from each provided sub-array into a new array

function largestOfFour(arr) {
  // Declare a variable to track the largest number
  let numberTracker = [];
  // Iterates through the main array
  for(i = 0; i < 4; i++) {
    numberTracker[i] = arr[i][0];
    // Iterates through each sub-array
    for(j = 0; j < 4; j++) {  
      if (arr[i][j] > numberTracker[i]) {
        numberTracker[i] = arr[i][j];
      }
    }
  }
  console.log(numberTracker);
  return arr;
}

largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);