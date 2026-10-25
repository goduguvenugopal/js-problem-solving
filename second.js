// Promises

// create new promise log the response from promise

// function fetchStudents() {
//   return new Promise((resolve, reject) => {
//     let isSuccess = !true;

//     let students = ["venu", "ramesh", "suresh", "mahesh"];

//     setTimeout(() => {
//       if (isSuccess) {
//         resolve(students);
//       } else {
//         reject({ status: 500, message: "internal server error" });
//       }
//     }, 2000);
//   });
// }

// const renderStudents = () => {
//   fetchStudents()
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((error) => {
//       console.error("Logging error:", error);

//       throw new Error(error.message);
//     });
// };

// renderStudents();

// what actually happens to each Promise and when the final Promise settles.

//  What does Promise.all() mean?

//   function getEmployees() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve([
//         { id: 1, name: "Venu", role: "Developer" },
//         { id: 2, name: "Ramesh", role: "Designer" }
//       ]);
//     }, 2000);
//   });
// }

// function getProjects() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve([
//         { id: 101, name: "ERP" },
//         { id: 102, name: "Mobile App" }
//       ]);
//     }, 1000);
//   });
// }

// function getAttendance() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve([
//         { employeeId: 1, status: "Present" },
//         { employeeId: 2, status: "Absent" }
//       ]);
//     }, 1500);
//   });
// }

//  Promise.all([
//   getEmployees(),
//   getProjects(),
//   getAttendance()
// ])
//   .then((responses) => {
//     console.log(responses);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

//   2. Promise.allSettled()
// Now suppose your dashboard can work even if some APIs fail.
// You want to know:
// "Tell me the result of EVERY Promise, whether it succeeded or failed."

// 3. Promise.race()
// Now things become interesting.
// Promise.race() means:
// "Give me the result of whichever Promise settles first."

// const server1 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve({
//       server: "Server 1",
//       data: [
//         { id: 1, name: "Venu" }
//       ]
//     });
//   }, 3000);
// });

// const server2 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve({
//       server: "Server 2",
//       data: [
//         { id: 1, name: "Venu" }
//       ]
//     });
//   }, 1000);
// });

// Promise.race([server1, server2])
//   .then((result) => {
//     console.log(result);
//   });

// 4. Promise.any()
// This one is different from race().
// Promise.any() means:
// "Give me the first SUCCESSFUL Promise."

// This is extremely useful when you have multiple servers or fallback APIs.

// const server1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(new Error("Server 1 failed"));
//   }, 1000);
// });

// const server2 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve({
//       server: "Server 2",
//       students: [
//         { id: 1, name: "Venu" }
//       ]
//     });
//   }, 2000);
// });

// const server3 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve({
//       server: "Server 3",
//       students: [
//         { id: 1, name: "Venu" }
//       ]
//     });
//   }, 3000);
// });

// Promise.any([
//   server1,
//   server2,
//   server3
// ])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// linear search

// const targetNum = 111;

// const arr = [3, 5, 6, 2, 10, 15, 4, 1];

// function findNumber(targetNum, arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === targetNum) {
//       return i;
//     }
//   }

//   return -1;
// }

// console.log(findNumber(targetNum, arr));

// find vowels and consonants

// const arr = ["a", "e", "i", "o", "u"];
// const str = "venugopal";

// function separateLetters(arr, str) {
//   let v = [];
//   let c = [];

//   for (let i = 0; i < str.length; i++) {
//     let isVowel = false;

//     for (let j = 0; j < arr.length; j++) {
//       if (str[i] === arr[j]) {
//         isVowel = true;
//         break;
//       }
//     }

//     if (isVowel) {
//       v.push(str[i]);
//     } else {
//       c.push(str[i]);
//     }
//   }

//   return { v, c };
// }

// console.log(separateLetters(arr, str));

// print prime numbers upto given input

 
// const input = 100;

// // Print prime numbers up to the given input
// function primeNumbers(input) {
//   const primes = [];

//   for (let num = 2; num <= input; num++) {
//     let isPrime = true;
 

//     for (let i = 2; i * i < num; i++) { 
 
        
//       if (num % i === 0) {
//         isPrime = false; 
//         break; 
//       } 
//     } 
 
//     if (isPrime) {
//       primes.push(num);
//     }
//   }

//   return primes;
// }

// console.log(primeNumbers(input));

// “The time complexity is Big O of n times the square root of n, because the outer loop runs n times, and the inner loop checks divisors up to the square root of each number.”


// Print fibonacci series up to given input 

// const input = 100;

// function fibonacci(input) {
//   let first = 0;
//   let second = 1;

//   for (let i = 0; i < input; i++) {
//     console.log(first);

//     // [first, second] = [second, first + second];  

//     const next = first + second
//     first =  second
//     second = next
//   }
// }

// fibonacci(input);
