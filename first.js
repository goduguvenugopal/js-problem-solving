 function checkPrimeNumber(num) {
  if (num <= 1) return "this is not a prime number";

  for (let i = 2; i * i <= num; i++) {

    console.log( "iteration number : ", i);

    console.log( "square : ",i * i);
    
    
    if (num % i == 0) {
      return "this is not a prime number";
    }
  }

  return "this is the prime number";
}

console.log(checkPrimeNumber(457)); // "this is the prime number"
 