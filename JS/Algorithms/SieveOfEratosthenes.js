//The purpose of Sieve Of Eratosthenes algorithm is to find all the prime numbers up to the given number.
/*
A number that is divisible by 1 and itself called prime numbers.
2,3,5,7,11,13,17,19,....
*/ 
const isPrime = num => {
    for(let i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }
console.log(isPrime(17)); // return sboolean value

  
function sieveOfEratosthenes(n) {
    var primes = [];
    for (var i = 0; i <= n; i++) {
      primes[i] = true;
    }
    
    primes[0] = false;
    primes[1] = false;
    
    for (var i = 2; i <= Math.sqrt(n); i++) {
      for (j = 2; i * j <= n; j++) {
        primes[i * j] = false;
      }
    }
    
    var result = [];
    for (var i = 0; i < primes.length; i++) {
      if (primes[i]) result.push(i);
    }
    return result;
}  
console.log(sieveOfEratosthenes(100));