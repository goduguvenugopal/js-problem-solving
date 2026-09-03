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

function safeFactorial(n) {
  let result = 1n; // Using BigInt (denoted by 'n')
  for (let i = 2n; i <= BigInt(n); i++) {
    result *= i;
  }
  return result;
}

console.log(safeFactorial(100000)); // Works without crashing! (Prints a 456,574 digit number)  