// Checks whether a string ends with a given target string

function confirmEnding(str, target) {

  // The position of the first letter checked
  let startNumber = str.length - target.length;
  // The position of the last letter checked
  let endNumber = str.length;
  // The section of str being checked against
  let endString = str.substring(startNumber,endNumber);

  if(endString === target) {
    return true;
  } 

  return false;
}

let result = confirmEnding("Bastian", "iane");

console.log(result);
