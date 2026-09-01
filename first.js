function printFactors(num) {
  let factors = [];

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }
  return factors
}

const results = printFactors(40)

console.log(results);
