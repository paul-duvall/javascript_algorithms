// ******************** EVERYTHING BE TRUE *******************
// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
// If all elements are truthy, return true. Else, return false.

function truthCheck(collection, pre) {
  // Declare a variable holding a boolean for the result, default to true
  let result = true;

  // Loop through each object in the array
  collection.forEach(function(object){
    // Check if the key in the parameter pre is falsy in the current object
    if(!object[pre]){
      // If falsy, set result to false
      result = false;
    }   
  });

  console.log(result);
  // return true if key is present in all objects
  return result;
}

// Should return true
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

// Should return false
// truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"); 