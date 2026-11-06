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

const arr = [2, 3, 4, 2, 1, 5, 3, 4, 2, 5, 6, 1, 7, 8];

function removeDup(arr) {
  const uniArr = [];

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    let isDuplicate = false;

    for (let j = 0; j < uniArr.length; j++) {
      if (current === uniArr[j]) {
        isDuplicate = true;
        break;
      }
    }

    if (!isDuplicate) {
      uniArr[uniArr.length] = current;
    }
  }

  return uniArr;
}

console.log(removeDup(arr));
