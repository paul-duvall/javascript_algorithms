// ******************** ROMAN NUMERAL CONVERTER *******************
// Converts a given number into Roman numerals

function convertToRoman(num) {
  // Declare variables for the result, roman numerals and their decimal values
  let result = '';
  let romNums = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  let romNumVals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  // Create a loop the length of the romNumVals array
  for(i = 0; i < romNumVals.length; i++){
    // For each item in the romNumVals array, repeat a loop until the value of num is less than the current item in the array
    while(romNumVals[i] <= num){
      // Add the roman numeral equivalent to the current value in romNumVals to the result string
      result = result + romNums[i];
      // Subtract the current value from romNumVals from the number
      num = num - romNumVals[i];
    }
  }
  // console.log(result);
  return result;
 }
 
 convertToRoman(36);
// convertToRoman(424);
//  convertToRoman(83)// should return "LXXXIII"