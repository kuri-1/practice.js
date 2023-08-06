/*Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]*/

function digitize(n) {
    let str = String(n)
    let arr = str.split("").map(Number).reverse();
    return arr;
  }


console.log(digitize(35231))//,[1,3,2,5,3]);
console.log(digitize(0))//,[0]);
