// Replaces &,",<,> and ' with html entities

function convertHTML(str) {
  // Declare regular expressions for each entity
  let ampersandRegex = /&/, doubleQuoteRegex = /"/, lessThanRegex = /</, greaterThanRegex = />/, apostropheRegex = /'/;

  // Create an array of the characters in the string
  let arrayOfChars = str.split("");

  // Loop through each of the characters in the array
  for(let i=0; i < arrayOfChars.length; i++){

    // For each, check to see if it is one of the characters that need to be changed
    if(ampersandRegex.test(arrayOfChars[i])) {
      arrayOfChars[i] = arrayOfChars[i].replace(/&/, "&amp;");
    } 
    else if(doubleQuoteRegex.test(arrayOfChars[i])) {
      arrayOfChars[i] = arrayOfChars[i].replace(/"/, "&quot;");
    } 
    else if(lessThanRegex.test(arrayOfChars[i])) {
      arrayOfChars[i] = arrayOfChars[i].replace(/</, "&lt;");
    } 
    else if(greaterThanRegex.test(arrayOfChars[i])) {
      arrayOfChars[i] = arrayOfChars[i].replace(/>/, "&gt;");
    } 
    else if(apostropheRegex.test(arrayOfChars[i])) {
      arrayOfChars[i] = arrayOfChars[i].replace(/'/, "&apos;");
    } 
  }
  
  // Change the altered array back into a string
  str = arrayOfChars.join("");
  console.log(str);

  return str;
}

convertHTML("<>");
// convertHTML("Dolce & Gabbana");
// convertHTML("Hamburgers < Pizza < Tacos");
// convertHTML('Stuff in "quotation marks"');
