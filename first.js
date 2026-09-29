// const fs = require("fs/promises");

// 1 . async function fetchExpenses() {
//   try {
//     const text = await fs.readFile("./project_expenses.json", "utf-8");

//     const data = JSON.parse(text);

//     return data;
//   } catch (error) {
//     console.error(error);
//   }
// }

// const sumEachExpenses = async () => {
//   const res = await fetchExpenses();

//   const sumex = res.reduce((acc, item) => {
//     acc[item.project_code] =
//       (acc[item.project_code] || 0) + Number(item.amount);

//     return acc;
//   }, {});

//   return sumex;
// };

// async function main() {
//   const result = await sumEachExpenses();

//   console.log(result);
// }

// main();

//2 . print factorials

// function printFactorial(n) {
//   return n <= 1 ? 1 : n * printFactorial(n - 1);
// }

// console.log(printFactorial(512345));

// function safeFactorial(n) {
//   let result = 1n; // Using BigInt (denoted by 'n')
//   for (let i = 2n; i <= BigInt(n); i++) {
//     result *= i;
//   }
//   return result;
// }

// console.log(safeFactorial(100000)); // Works without crashing! (Prints a 456,574 digit number)

// 3. Print Fibonacci

// function Fibonacci(num) {
//   let firstNum = 0;
//   let secondNum = 1;
//   let arr = [];

//   arr.push(firstNum);

//   for (let i = 1; i <= num; i++) {
//     arr.push(secondNum);

//     const nextTime = firstNum + secondNum

//     firstNum = secondNum
//     secondNum = nextTime

//   }

//   return arr;
// }

// const res = Fibonacci(100);
// console.log(res);

// 3.find the missing number

// function findTheMissingNumber(numArr) {
//   let missedNums = [];
//   let count = 0;
//   for (let i = 0; i < numArr.length; i++) {
//     if (numArr[i] !== count) {
//       missedNums.push(count);
//       count++;
//     }
//     count++;
//   }
//   return missedNums;
// }

// const numArr = [0, 1, 3, 4, 6];
// const res = findTheMissingNumber(numArr);
// console.log(res);

// 4. find the single missing number

// const numArr = [0, 1, 2, 3, 5];

// const findSingleMissingNum = (numArr) => {
//   const lengthOfArr = numArr.length;
//   console.log(lengthOfArr);

//   const sumOfArray = (lengthOfArr * (lengthOfArr + 1)) / 2;
// console.log(sumOfArray);

//   let actualArraySum = 0;

//   for (let ele in numArr) {
//     actualArraySum += ele;
//   }
//   return sumOfArray - actualArraySum;
// };

// console.log(findSingleMissingNum(numArr));

//  function findMissing(arr) {
//     const maxNum = Math.max(...arr);
//     let missing = [];

//     for (let i = 0; i <= maxNum; i++) {

//         if (!arr.includes(i)) {
//             missing.push(i);
//         }

//     }

//     return missing;
// }

// console.log(findMissing([6, 12, 3, 4, 0, 8, 10, 1, 5, 2]));

// // 5. count the digits of number
// function countTheDigitsOfNum(num) {
//   num = Math.abs(num);
//   let numDigits = 1;
//   while (num > numDigits) {
//     num = Math.floor(num / 10);

//     numDigits += 1;
//   }

//   return `length of the digits : ${numDigits} `
// }

// console.log(countTheDigitsOfNum(-26545));

// check palindrome of number

// const input = 3003;

// function isPalindromeNum(num) {
//   const strRes = String(num);
//   let revStr = strRes.split("").reverse().join("");
//   let revNum = Number(revStr);
//   if (revNum === num) return "This is the palindrome";
//   return "This is not palindrome";
// }

// console.log(isPalindromeNum(input));

// check palindrome number with while loop

// Check palindrome number with while loop

// const input = 3003;

// function isPalindromeNum(num) {
//   const originalNum = num;
//   let revNum = 0; 300 ;

//   while (num > 0) {
//     let remainder = num % 10;

//     revNum = 10 * revNum + remainder;

//     num = Math.floor(num / 10);
//   }

//   if (revNum === originalNum) {
//     return "This is a Palindrome Number";
//   }

//   return "This is not a Palindrome Number";
// }

// console.log(isPalindromeNum(input));

// Palindrome checking with two pointers
// const input = "noon";

// function check_Palindrome(input) {
//   let first = 0;
//   let last = input.length - 1;

//   while (first < last) {
//     if (input[first] !== input[last]) {
//       return   `This is the Palindrom ${input}`
//     }

//     first++;
//     last--;
//   }

//   return  `This is the Palindrom ${input}`;
// }

// console.log(check_Palindrome(input));

// give in reverse at specific character in word and combine with rest word

// "Move the specified character to the end of the word."

// const input = "hyderabad";

// const place = "a";

// function MoveLetters(input, place) {
//   let arr = [];
//   let restWord = []
//   for (let i = 0; i <= input.length - 1; i++) {
//     if (input[i] !== place) {
//         arr.push(input[i]);
//         continue
//     }  else{
//         restWord.push(input[i])
//     }
//   }

//   return [...arr, ...restWord].join("")
// }

// console.log(MoveLetters(input, place));

// Reverse the word starting from a specific character and combine it with the remaining part."

// const input = "hyderabad";
// const place = "a";

// function reverseWord(input, place) {
//   const index = input.indexOf(place);

//   if (index === -1) return input;

//   const before = input.slice(0, index);
//   const target = input.slice(index);

//   return before + target.split("").reverse().join("");
// }

// console.log(reverseWord(input, place));

// without built-in functions like indexOf(), slice(), split(), reverse(), join(), then you need to manually find the character and build the result.
//  const input = "Andhrapradesh";
// const targetChar = "p";

// function reverseWord(input, targetChar) {
//   let index = -1;

//   // Find the first occurrence of target character
//   for (let i = 0; i < input.length; i++) {
//     if (input[i] === targetChar) {
//       index = i;
//       break;
//     }
//   }

//   // Target character not found
//   if (index === -1) return "Target character not found";

//   let result = "";

//   // Reverse from target character to the beginning
//   for (let i = index - 1 ; i >= 0; i--) {
//     result += input[i];
//   }

//   // Append the remaining characters
//   for (let i = index ; i < input.length; i++) {
//     result += input[i];
//   }

//   return {
//     reversed_word: result,
//     index
//   };
// }

// console.log(reverseWord(input, targetChar));

