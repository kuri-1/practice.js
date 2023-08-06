function minMax(arr) {
  let minVal = Math.min.apply(Math, arr);
  let maxVal = Math.max.apply(Math, arr);
  let newArr = [];
  newArr.push(minVal);
  newArr.push(maxVal);
  return newArr;
}

console.log(minMax([1, 2, 3, 4, 5])); // [1, 5]]),
console.log(minMax([2334454, 5])); // [5, 2334454]]),
console.log(minMax([5])); // [5, 5]])
