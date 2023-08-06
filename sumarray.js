// sum array which also contain ''
function sumMix(x) {
  let newStr = " "; // create an empty string to hold x
  let i = []; // create empty array to convert string
  newStr += x.toString(); // split array to string
  //return newStr
  i = JSON.parse("[" + newStr + "]"); // turn string to array
  let sum = i.reduce((p, c) => { // sum values in string
    return p + c;
  }, 0);
  return sum;
}

console.log(sumMix([9, 3, "7", "3"])); // 22);
console.log(sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7])); // 42);
console.log(sumMix(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"])); // 41);
