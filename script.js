//1. reversed string logic and finding palindrome string
// function reverseFunc(str){
//     const res = str.split("").reverse().join("").toLowerCase()
//     console.log("reversed string :", res);
//     if(res === str.toLowerCase() ){
//         console.log("this is the palindrome word :", res);
//     }else{
//         console.log("not palindrome word :", res);
//     }
// }
// reverseFunc("noon")

//2. printing half of string
// const getStringLength = (str)=>{
//     const res = Math.floor(str.length / 2)
//     const halfStr = str.substring(0 , res)
//     console.log(halfStr);
// }
// getStringLength("venugopal")

//3. finding largest number in array
// const array = [1,23,4,5,67,12,8,938,94,6,23]
// let largestNum = 0
// for(let index = 0; index < array.length ; index++){
//     const currentNum = array[index]
//     if(currentNum >largestNum){
//         largestNum = currentNum
//     }
// }
// console.log(largestNum);

// other way to find largest number in array
// const array = [1,23,4,5,67,12,8,938,94,6,23]
// const findFunc = (num)=>{
//     const res = [...num, 22,3343,555,66,7]
//     console.log(res);
//     return Math.max(...res)
// }
// console.log(findFunc(array));

// //4. find the largest negative number
// const array = [-11,-23,-4,-5,-67,-12,-8,-938,-94,-1,-23,-80]
//  let largestNum = -0
//  for(let index = 0; index < array.length ; index++){
//    const currentNum = array[index]
//      if(currentNum > largestNum){
//          largestNum = currentNum
//      }
//  }
//  console.log(largestNum);

//5. removing duplicates in array
//  const array = [1,23,4,3,4,4,4,4,4,5,67,12,8,938,94,6,2,3,1,2,33]
// const removeDuplicatesFunc = (paramArray)=>{
//   return [...new Set(paramArray)]
// }
// console.log(removeDuplicatesFunc(array));

// other method to find duplicates in array
// const array = [1,23,4,3,4,4,4,4,4,5,67,12,8,938,94,6,2,3,1,2,33]
// const removeDuplicatesFunc = (arr)=>{
//   return arr.filter((item, index)=> arr.indexOf(item) === index)
// }
// console.log(removeDuplicatesFunc(array));

// 6. finding sum all numbers in Array
// const array = [1, 6, 2, 3, 1, 2, 33];
// const sum = array.reduce((acc, curr) => acc + curr, 0);
// console.log(sum);

// Check if two strings are anagrams.
// const checkAnagramsFunc = (str1 , str2)=>{
//   const res1 = str1.split("").sort().join("")
//   const res2 = str2.split("").sort().join("")
//   if(res1 === res2){
//     console.log("these words are anagrams :" ,  str1 , str2);
//   }else{
//     console.log("not anagrams words");
//   }

// }
// checkAnagramsFunc("dare" , "dear")

//7. Count the number of vowels in a string.
// const checkVowels = (str)=>{
//   let vowels = "aeiouAEIOU"
//   return str.split("").filter((char)=> vowels.includes(char)).length
// }
// console.log((checkVowels("aeioud")));

//8. Find the second largest number in an array.
// const array = [1, 23, 4, 5, 67, 12, 8, 938, 94, 6, 23];
// function secondLargest(arr) {
// const sortedArr =  [...new Set(arr)].sort((a, b)=> b - a )
// return sortedArr[1] || null
// }
// console.log(secondLargest(array));

//9. Generate a random number within a given range.
// const generateRandomNum = (minPara, maxPara) => {
//     const min = Math.ceil(minPara);
//     const max = Math.floor(maxPara);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// };
// console.log(generateRandomNum(100000, 999999));

// // hardcode json data
// const array = [
//   {
//     item: "bag",
//     cost: "250",
//   },
//   {
//     item: "ball",
//     cost: "50",
//   },
//   {
//     item: "shirt",
//     cost: "250",
//   },
//   {
//     item: "women shirt",
//     cost: "230",
//   },
//   {
//     item: "bedsheet",
//     cost: "550",
//   },
// ];

// //10. search logic
// const searchFunction = (input) => {
//   const searchResults = array.filter((item) =>
//     item.item.toLocaleLowerCase().includes(input.toLocaleLowerCase())
//   );
//   return searchResults;
// };
// console.log(searchFunction("ba"));
// console.log(searchFunction("bag"));
// console.log(searchFunction("shi"));

//11. finding prime number
// function isPrime(n) {
//   if (n < 2) return false; // 0 and 1 are not prime
//   if (n === 2 || n === 3) return true; // 2 and 3 are prime
//   if (n % 2 === 0 || n % 3 === 0) return false; // Eliminate multiples of 2 & 3

//   for (let i = 5; i * i <= n; i += 6) {
//     if (n % i === 0 || n % (i + 2) === 0) return false;
//   }
//   return true;
// }
// // Example usage:
// console.log(isPrime(6));

// // 12. Finding Even and Odd NUMBER
// const arr = [1, 2, 3, 4, 5, 65, 6, 7, 8, 9, 12, 11, 10, 13, 24, 14, 16, 17, 18];
// let evenArray = [];
// let oddNum = [];
// const findEvenNumber = (arr) => {
//   for (let num of arr) {
//     num % 2 === 0 ? evenArray.push(num) : oddNum.push(num)
//   }
// };
// findEvenNumber(arr)
// console.log(evenArray.sort((a,b)=> a +b));
// console.log(oddNum.sort((a,b)=> a +b));
// console.log(oddNum.length + evenArray.length);

//13. converting the first letter of each word to uppercase in string
// const string = "coding is easy when you able to solve the bugs";
// const res = string.split(" ").map((word)=> word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
// console.log(res);

// 14. reverse the array without using reverse() method
// const arr = [1,2,3,4,5,6,7,8,9,10]
// const reverseFunc = (paramArray)=>{
//   let res = [1,2,3]
//    paramArray.forEach(element => {
//    res.unshift(element * 2)
//   });
//   return res
// }
// console.log(reverseFunc(arr))

//15. double each number in array using Map() method
// const arr = [1,2,3,4,5,6,7,8,9,10]
// const doubleNumFunc =(paramArray)=>{
//     return paramArray.flatMap((num)=> [num , num])
//  }
//  console.log(doubleNumFunc(arr))

// 16. find the factors of a number
// const findFactors = (num) => {
//   const factors = [];
//   for (let index = 1; index <= num; index++) {
//     console.log("venu", index);

//     if (num % index === 0) {
//         factors.push(index);
//     }
// }
//   return factors;
// };
// console.log(findFactors(7));
// counter function

// 17. promise simulation logic
// const res = new Promise((resolved, rejected) => {
//   console.log("promise is in pending..");
//   let num = 5;
//   setTimeout(() => {
//     if (num > 10) {
//       resolved("promise fulfilled");
//     } else {
//       rejected("promise rejected");
//     }
//   }, 1000);
// });
// res
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// //18. changing first letter of word into capital in array of words
// const arr = ["venu", "gopal", "varun", "tarun", "kiran"];
// const func = (params) => {
//   return params.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
// };
// console.log(func(arr));

//19. changing letter in name with string methods
// const myName = "venugopal"
// // console.log(myName);
// // const res = myName.replace("u" , "i")

//20. changing letter in name with array methods
// const conArr = myName.split("")
// console.log(conArr);
//   conArr.splice(3,1, "i")
// const res = conArr.join("")
// console.log(res);

//21.finding sum of all numbers in given array
// const arr = [91,45,152,87,814,84,8]
// const res = arr.reduce((acc , item )=> acc + item , 0)
// console.log(res);

// 22. iterating over an array printing each element using forEach() and for() loop
// const arr = ["venu" , "varun" ,"siddarth" , "kowshik" , "kiran", "gopal"]
//  arr.forEach((item)=>{
//   console.log(item);
// })
// for(let index = 0 ; index  < arr.length ; index++){
//   console.log(arr[index]);
// }

// 23. find the first element in array that is greater then 50 using find() & smallest number greater than 50, use filter() + Math.min():
// const arr = [25,50,7,8,45,56,22,82,14,54,6,15,51,5,45]
// const res1 = arr.filter((item)=> item > 50)
// const res  = Math.min(...res1)
// console.log( " smallest number greater than 50 :" ,res);

//24. find the negative number using some()
// const arr = [2,3,4,5,6,77,8,-9]
// const res = arr.some((item)=> item < 2)
// console.log(res);

// 25. checking positive number using every()
// const arr = [2,3,4,5,6,77,8,9]
// const res = arr.every((item)=> item > 0)
// console.log(res);
