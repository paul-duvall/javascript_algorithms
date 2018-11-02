// ******************** ARGUMENTS OPTIONAL *******************
// Sums two arguments together. If only one argument provided, returns a function that expects one argument and returns the sum.
// If arguments aren't valid numbers, return undefined

// Whilst this passed the freecodecamp tests, I'm not entirely happy with it as it doesn't really always return undefined
// in all instances where a valid number isn't passed in.

function addTogether() {
  // Declare various to hold the final total
  var total;
  // Check to see if the first or second argument passed returns a string
  if(typeof arguments[0] === "string" || typeof arguments[1] === 'string'){
    // If a string has been passed, return undefined
    return undefined;
  } else if(arguments.length === 2) {
    // If to arguments have been passed, sum the arguments and return
    total = arguments[0] + arguments[1] 
    return total;  
  } 

  // If there is only one argument (which isn't a string), set total to the value of that argument and return a function
  total = arguments[0];
  return function() {
    // Check to see if the argument passed to the second argument is an object
    if(typeof arguments[0] === "object") {
      // If an object, return undefined
      return undefined;
    }
    // If the argument is not an object, add it to the total and return
    total += arguments[0];
    return total;
  }
}

// addTogether(2)(3);
// addTogether(2,3);
// addTogether("http://bit.ly/IqT6zt");
// addTogether(2, "3");
addTogether(2)([3]);