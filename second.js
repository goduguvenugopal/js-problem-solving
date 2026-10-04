// Promises

// create new promise log the response from promise

function fetchStudents() {
  return new Promise((resolve, reject) => {
    let isSuccess = !true;

    let students = ["venu", "ramesh", "suresh", "mahesh"];

    setTimeout(() => {
      if (isSuccess) {
        resolve(students);
      } else {
        reject({ status: 500, message: "internal server error" });
      }
    }, 2000);
  });
}

const renderStudents = () => {
  fetchStudents()
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Logging error:", error);

      throw new Error(error.message);
    });
};

renderStudents();
