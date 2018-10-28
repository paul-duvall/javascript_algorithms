///////////////////////////////////////////////////////////////////////////////////
// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'
///////////////////////////////////////////////////////////////////////////////////

function reserveString(str) {
  // return str
  //   .split('')
  //   .reverse()
  //   .join('');

  ////////////////////////////////////
  // Or could be done using a decreasing for loop

  // let revString = '';
  // for(let i = str.length - 1; i >= 0; i--){
  //   revString = revString + str[i];
  // }
  // return revString;

  ////////////////////////////////////
  // Or could be done using an increasing for loop

  // let revString = '';
  // for(let i = 0; i <= str.length - 1; i++) {
  //   revString = str[i] + revString;
  // }
  // return revString;

  ////////////////////////////////////
  // Or could be done using a for of loop

  // let revString = '';
  // for(let char of str) {
  //   revString = char + revString;
  //  }
  // return revString;

  ////////////////////////////////////
  // Or could be done using a forEach function

  // let revString = '';
  // str.split('').forEach(function(char) {
  //   revString = char + revString;
  // });
  // return revString;

  ////////////////////////////////////
  // Neaten that up with arrow functions

  // let revString = '';
  // str.split('').forEach(char => revString = char + revString);
  // return revString;

  ////////////////////////////////////
  // Or could be done with reduce

  // return str.split('').reduce(function(revString, char) {
  //   return char + revString;
  // });

  return str.split('').reduce((revString, char) => char + revString, '');

}

const reverseOutput = reserveString('hello');

// console.log(reverseOutput);


/////////////////////////////////////////////////////////////////////////////////////////////
// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') === false
/////////////////////////////////////////////////////////////////////////////////////////////

function isPalindrome(str) {
  const reverseStr = str.split('').reverse().join('');
  return reverseStr === str;
}

const palindromeOutput = isPalindrome('racecar');

// console.log(palindromeOutput);


/////////////////////////////////////////////////////////////////////////////////////////////
// CHALLENGE 3: REVERSE AN INTEGER
// Return a positive integer in reverse
// ex. reverseInt(521) === 125
/////////////////////////////////////////////////////////////////////////////////////////////

function reverseInt(int) {
  const revString = int.toString().split('').reverse().join('');

  return parseInt(revString);
}

const reverseIntOutput = reverseInt(12345);

// console.log(reverseIntOutput);


/////////////////////////////////////////////////////////////////////////////////////////////
// CHALLENGE 4: CAPITALISE LETTERS
// Return a string with the first letter of every word capitalised
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
/////////////////////////////////////////////////////////////////////////////////////////////

function capitalizeLetters(str) {
  
  // const strArr = str.toLowerCase().split(' ');

  // for(let i = 0; i < strArr.length; i++) {
  //   strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
  // }
  
  // return strArr.join(' ');
  
  ////////////////////////////////////
  // Can also be done using map()

  return str
    .toLowerCase()
    .split(' ')
    .map(word => word[0].toUpperCase() + word.substr(1))
    .join(' ');

  ////////////////////////////////////
  // Can also be done using regular expressions

  // return str.replace(/\b[a-z]/gi, function(char) {
  //   return char.toUpperCase();
  // });

}

const capitalizeLettersOutput = capitalizeLetters('i love javascript');

// console.log(capitalizeLettersOutput);


/////////////////////////////////////////////////////////////////////////////////////////////
// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
/////////////////////////////////////////////////////////////////////////////////////////////

function maxCharacter(str) {
  const charMap = {};
  let maxNum = 0;
  let maxChar = '';

  str.split('').forEach(function(char) {
    if(charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  });

  for(let char in charMap) {
    if(charMap[char] > maxNum) {
      maxNum = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

const maxCharacterOutput = maxCharacter('javascript');

// console.log(maxCharacterOutput );


/////////////////////////////////////////////////////////////////////////////////////////////
// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers form 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz", for multiples of 3 and 5, print "FizzBuzz".
/////////////////////////////////////////////////////////////////////////////////////////////

function fizzBuzz(int) {
  for(let i = 1; i <= 100; i++) {
    if(i % 15 === 0) {
      console.log('fizzbuzz');
    } else if(i % 3 === 0){
      console.log('fizz');
    } else if(i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}

const fizzBuzzOutput = fizzBuzz();

console.log(fizzBuzzOutput);