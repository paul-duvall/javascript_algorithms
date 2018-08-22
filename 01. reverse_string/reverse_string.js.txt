// A function to reverse a given string

function reverseString(str) {
  // Split the string into an array
  let stringAsArray = str.split("");
  // Reverse the items in the array
  let reverseArray = stringAsArray.reverse();
  // Join the items in the array back up into a string
  str = reverseArray.join("");
  return str;
}

reverseString("hello");