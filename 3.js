// const l = 2;
// const a = 2;
// const p = "aa";

// function findEqualSize(l, a, p) {
//   const alphabets = "abcdefghijklmnopqrstuvwxyz".slice(0, a);

//   const arr = [];

//   function generate(current) {
//     if (current.length === l) {
//       if (current !== p) {
//         arr.push(current);
//       }
//       return
//     }

//     for (let char of alphabets) {
//       generate(current + char);
//     }
//   }

//   generate("");
// console.log(arr);

//   return arr.length;
// }

// console.log(findEqualSize(l, a, p));

// remove duplicates

// const arr = [2, 3, 4, 2, 1, 5, 3, 4, 2, 5, 6, 1, 7, 8];

// function removeDup(arr) {
//   const uniArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     const current = arr[i];
//     let isDuplicate = false;

//     for (let j = 0; j < uniArr.length; j++) {
//       if (current === uniArr[j]) {
//         isDuplicate = true;
//         break;
//       }
//     }

//     if (!isDuplicate) {
//       uniArr[uniArr.length] = current;
//     }
//   }

//   return uniArr;
// }

// console.log(removeDup(arr));

// find count of given target number 3 and up to given input number 35

// Time Complexity: O(n × log n), because we iterate through every number and inspect its digits.

// const inputNum = 10;
// const targetNum = 1;

// function findNumCount(input, target) {
//   let targetCounter = 0;

//   for (let i = 0; i <= input; i++) {
//     const strArr = String(i).split("");

//     for (let num of strArr) {
//       if (Number(num) === target) {
//         targetCounter++;
//       }
//     }
//   }

//   return targetCounter;
// }

// console.log(findNumCount(inputNum, targetNum));

// const inputNum = 35;
// const targetNum = 3;

// function findNumCount(input, target) {
//   let targetCounter = 0;

//   for (let i = 0; i <= input; i++) {
//     let num = i;

//     while (num > 0) {
//       const lastDigit = num % 10;

//       if (lastDigit === target) {
//         targetCounter++;
//       }

//       num = Math.floor(num / 10);
//     }
//   }

//   return targetCounter;
// }

// console.log(findNumCount(inputNum, targetNum));

// Complexity analysis
// Let n be the input number.
// Complexity	Value	Reason
// Time	O(n log n)	Visit each number and its digits
// Auxiliary space	O(1)	Only a few variables

// const num = 54678;

// function findDigits(num) {

//   let counter = 0;
//   while (num > 0) {
//     num = Math.floor(num / 10);
//     counter++;
//   }

//   return counter
// }

// console.log(findDigits(num));

// Find Armstrong Number

// Rules:
// - Don't convert the number into a string.
// - Don't use array methods.
// - Use a while loop.
// - Use % and Math.floor().
// - Use Math.pow() or ** for exponentiation.

// output : Armstrong Number

// function checkArmstrongNum(inputNum) {
//   const originalNum = inputNum;
//   let temp = inputNum;
//   let digits = 0;

//   while (temp > 0) {
//     temp = Math.floor(temp / 10);
//     digits++;
//   }

//   temp = inputNum;
//   let totalPowSum = 0;

//   while (temp > 0) {
//     const lastNum = temp % 10;
//     totalPowSum += lastNum ** digits;
//     temp = Math.floor(temp / 10);
//   }

//   return totalPowSum === originalNum
//     ? "Armstrong Number"
//     : "Not an Armstrong Number";
// }

// const l = 2;
// const a = 2;
// const f = "aa";

// function findCombinationOfCharactersLength(length, alpha, forbidden) {
//   const alphabets = "abcdefghijklmnopqrstuvwxyz";
//   const letters = alphabets.slice(0, alpha);

//   let count = 0;

//   function generatePossibleLetters(current) {
//     // Base case
//     if (current.length === length) {
//       if (current !== forbidden) {
//         count++;
//       }
//       return;
//     }

//     // Recursive case
//     for (let char of letters) {
//       generatePossibleLetters(current + char);
//     }
//   }

//   generatePossibleLetters("");

//   return count;
// }

// console.log(
//   findCombinationOfCharactersLength(l, a, f)
// );

// function first() {
//   console.log("1");
//   second();
//   console.log("6");
// }

// function second() {
//   console.log("2");
//   third();
//   console.log("5");
// }

// function third() {
//   console.log("3");
//   console.log("4");
// }

// first();

// print n numbers with recursive logic here
//  function printNumbers(n) {
//   if (n === 0) {
//     return;
//   }

//   console.log(n);
//   printNumbers(n - 1);

// }

// printNumbers(5);

// **Before recursion:**

// - The statement executes immediately, before the next recursive function call.
// - Executes while the call stack grows (recursive descent).
// - Example: Print `5, 4, 3, 2, 1`.

// **After recursion:**

// - The statement waits until the nested recursive function finishes.
// - Executes when the call stack unwinds and the parent resumes.
// - Each parent accesses its own original parameter value.
// - Example: Print `1, 2, 3, 4, 5`.

// **Remember:** Before = Going deeper. After = Coming back.

// // swap target numbers to last
// const arr = [1, 2, 0, 4, 0, 5, 0, 4, 4, 0];

// const target = 4;

// function swapNumbers(arr, target) {
//   let count = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) {
//         // using temp variable
//      const temp = arr[count]
//       arr[count] = arr[i];
//       arr[i] = temp;
//       count++;
//     }
//   }

//   return arr;
// }

// console.log(swapNumbers(arr, target));

// Best Time to Buy and Sell Stock

// const stocks = [2, 8, 3, 4, 6, 1, 9, 5, 12];

// function buyAndSellStock(stocks) {
//   let maxStock = 0;

//   for (let i = 0; i < stocks.length; i++) {
//     for (let j = i + 1; j < stocks.length; j++) {
//       const value = stocks[j] - stocks[i];
//       if (value > maxStock) maxStock = value;
//     }
//   }

//   return maxStock
// }
// console.log(buyAndSellStock(stocks));

// Complexity analysis
// - Time Complexity: O(n²) – Two nested loops.
// - Space Complexity: O(1) – Only a constant amount of extra space.