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