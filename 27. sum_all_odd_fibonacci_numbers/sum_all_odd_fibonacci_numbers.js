// Calculate the sum of all odd numbers from the Fibonacci sequence less than or equal to the given number

function sumFibs(num) {

  // Declare a variable to hold the Fibonacci sequence and another to hold the odd numbers from the sequence
  let fibArr = [1, 1], oddArr = [];

  // Add the numbers to fibArr
  while(fibArr.slice(-1)[0] + fibArr.slice(-2)[0] <= num) {
    fibArr.push(fibArr.slice(-1)[0] + fibArr.slice(-2)[0]);
  }
  
  // Add all odd numbers from fibArr to oddArr
  fibArr.map(function(currentNum){
    if(currentNum % 2 !== 0){
      oddArr.push(currentNum);
    }
  });

  // Sum the numbers in oddArr
  num = oddArr.reduce((a,b) => a + b, 0);
  console.log(num);
  return num;
}

sumFibs(75025);