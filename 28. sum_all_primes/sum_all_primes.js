// Sums all prime numbers up to and including the given number

function sumPrimes(num) {
  let total = 0;

  // Loop through each number up to the given number
  for(i = 2; i <= num; i++){
    let result = isPrime(i); // For each number, set a boolean
    
    // If the current number is prime, add it to the total variable
    if(result === true){
      total = total + i;
    }
  }
  return total;
}

function isPrime(num){
  for(let i = 2; i < num; i++) {
    // For each number, check if it divisible by each whole integer below
    if(num % i === 0){
      return false; // Return false if the number isn't prime
    } 
  }
return true; // Return true is the number is prime
}

sumPrimes(977);