// reverse string
function reverseString(str) {
    return str.split('').reverse().join('');
  }
  console.log(reverseString("Hello")); 
// count caracters
  function countCharacters(str) {
    return str.length;
  }

  console.log(countCharacters("Hello")); 
 // capitalize
  function capitalizeWords(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
    // max number
  function findMax(arr) {
    return Math.max(...arr);
  }
  console.log(findMax([1, 5, 3, 9, 2])); 
 // min
  function findMin(arr) {
    return Math.min(...arr);
  }
  
 
  console.log(findMin([1, 5, 3, 9, 2])); 
// sum
  function sumArray(arr) {
    return arr.reduce((sum, current) => sum + current, 0);
  }
  console.log(sumArray([1, 2, 3, 4, 5])); 
  
  // filter array
  function filterArray(arr, condition) {
    return arr.filter(condition);
  }

  const numbers = [1, 2, 3, 4, 5, 6];
  const isEven = num => num % 2 === 0;
  
  console.log(filterArray(numbers, isEven)); 
  //factoriel
  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  //prime numbers
  function isPrime(num) {
    if (num <= 1) {
      return false; 
    }
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false; 
    }
    
    return true; 
  }
}
//generate fibonnacci
function generateFibonacci(n) {
    const fib = [0, 1];
    
    while (fib.length < n) {
      const nextTerm = fib[fib.length - 1] + fib[fib.length - 2];
      fib.push(nextTerm);
    }
    
    return fib.slice(0, n); 
  }
  
  
  
  
  
  
  
  