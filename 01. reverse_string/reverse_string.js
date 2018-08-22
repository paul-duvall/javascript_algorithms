// Function to factorialize a given integer

function factorialize(num) {
  // Set a counter for the for loop
  let count = num;
    
  // 0 should return a 1
  if (count == 0) {
    num = 1;
  } else {
    for (let i = 1; i < count; i++) {
    // The integer is multiplied by each integer below itself
    num = num * i;
    } 
  }
  console.log(num);
  return num;
  }

factorialize(6);
