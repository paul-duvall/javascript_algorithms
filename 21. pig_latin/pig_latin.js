// Translates a given word into pig latin
// Namely, puts 'way' on the end of any word that starts with a vowel and, if a word starts with consonants, moves those consonants to the end of the word and adds 'ay'

function translatePigLatin(str) {
  // regex enables checking for words that start with a vowel
  let regex = /^[aeiou]/;

  if(regex.test(str)) {
    // If a word starts with a vowel, adds 'way'
    str = str + "way";
  } else {
    // declare variables for the current letter being checked and the index of that character
    let currentLetter = str[0];
    let i = 0;

    while (regex.test(currentLetter) === false) {
      // Logs the index of the consonants before the first vowel in the word
      currentLetter = str[i];
      i++;
    }

    // Split str into an array, remove the consonants into a separate variable
    str = str.split('');
    const lettersToBeAdded = str.splice(0, (i-1));
    // Add the consonants back to the end and then add 'ay'
    str = str.concat(lettersToBeAdded).join('');
    str = str + 'ay';
    
  }
  return str;
}

translatePigLatin("algorithm");
