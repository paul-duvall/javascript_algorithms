// Truncates string(str) if it is longer than the given maximum string length(num)

function truncateString(str, num) {
    
    let newString;
    if(str.length <= num) {
      // If str is less than or equal to the maxiumum string length, returns the same string
      newString = str;
    } else {
      // If str is less than the maximum string length, truncates and adds ...
      newString = str.substring(0, num);
      newString += '...';
    }
  
    console.log(newString);
    return newString;
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 12);