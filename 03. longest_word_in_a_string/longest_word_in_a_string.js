// An algorithm to find the length of the longest word in a string

function findLongestWordLength(str) {
  // Create an array of all the words in the string
  let  arrayOfWords = str.split(" ");
  
  let longestWord = 0;
  
  // Loop through each of the words
  for (let i = 0; i < arrayOfWords.length; i++) {  
    
    if (arrayOfWords[i].length > longestWord) {
      // If the current word is longer, update longestWord with that word's length
      longestWord = arrayOfWords[i].length;
    }
  }
  return longestWord;
}

findLongestWordLength("Red pandas cannot jump.");