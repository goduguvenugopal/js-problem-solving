const l = 2;
const a = 2;
const p = "aa";

function findEqualSize(l, a, p) {
  const alphabets = "abcdefghijklmnopqrstuvwxyz".slice(0, a);

  const arr = [];

  function generate(current) {
    if (current.length === l) {
      if (current !== p) {
        arr.push(current);
      }
      return
    }

    for (let char of alphabets) {
      generate(current + char);
    }
  }

  generate("");
console.log(arr);

  return arr.length;
}

console.log(findEqualSize(l, a, p));





function generate(current) {
  console.log("Start:", current);

  if (current.length === 2) {
    console.log("Returning:", current);
    return;
  }

  for (const char of ["a", "b"]) {
    generate(current + char);
    console.log("Resumed:", current);
  }
}

generate("");
