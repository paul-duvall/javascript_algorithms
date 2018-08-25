// Checks whether a string ends with a given target string
// Version 1 logs the boolean result in a variable...

function confirmEnding(str, target) {
  
  // The position of the first letter checked
  startNumber = str.length - target.length;
  // The position of the last letter checked
  endNumber = str.length;
  // The section of str being checked against
  endString = str.substring(startNumber,endNumber);

  if(endString === target) {
    result = true;
  } else {
    result = false;
  }

  console.log(result);
  return result;
}

confirmEnding("congratulation", "on");

// Version 2 works with code camp and just results 'true' or 'false (commented out)

// Checks whether a string ends with a given target string

// function confirmEnding(str, target) {

//   let result;
//   // The position of the first letter checked
//   let startNumber = str.length - target.length;
//   // The position of the last letter checked
//   let endNumber = str.length;
//   // The section of str being checked against
//   let endString = str.substring(startNumber,endNumber);

//   if(endString === target) {
//     return true;
//   } 

//   return false;
// }

// confirmEnding("Bastian", "toon");