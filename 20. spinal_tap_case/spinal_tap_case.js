// ******************** SPINAL TAP CASE *******************
// Convert a string into spinal case, i.e. all-lowercase-words-joined-by-dashes

function spinalCase(str) {
  // Declare a variable containing a string where all white space and underscores are replaced by dashes
  let newStr = str.replace(/\s|_/g, "-");

  // Look for any new words (beginning with a capital letter) where there isn't a space before them
  // Add a dash between the lowercase letter and the uppercase letter
  // Change all characters to lowercase
  newStr = newStr.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

  console.log(newStr);
  return newStr;
}

spinalCase("This IsSpinal Tap");
