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