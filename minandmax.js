function highAndLow(numbers) {
  let x = [];
  x = numbers.split(" ");

  let maxNum = Math.max.apply(null, x);

  let minNum = Math.min.apply(null, x);
  return "" + maxNum + " " + minNum;
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")); // "42 -9");
console.log(highAndLow("1 2 3")); // "3 1");
