// Return a string comprised of a given number of repetitions of another string

function repeatStringNumTimes(str, num) {

  // Declare a variable to hold the final string
  let result = str;
  
  if(num < 1) {
    // For a number of times 0 or less, set an empty string for result
    result = "";
  } else {
    for (let i = 0; i < (num-1); i++) {
      // Append str onto the end of the result string
      result += str;
    }
  }

  console.log(result);
  return result;
}

repeatStringNumTimes("test", 5);