function powersOfTwo(n) {
  let x = [];
  let i = 0;
  while (i <= n) {
    x.push(2 ** i);
    i++;
  }
  return x;
}

console.log(powersOfTwo(0)); //[1]
console.log(powersOfTwo(1)); //[1, 2]
console.log(powersOfTwo(4)); //[1, 2, 4, 8, 16]
