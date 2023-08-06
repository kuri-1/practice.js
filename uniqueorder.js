/* Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.*/

var uniqueInOrder = function (iterable) {
  let iterableArr = iterable.split("");
  b = []; // create an empty array to hold the new array

  for (let i = 1; i < iterableArr.length; i++) {
    // iterate through each element of the original array
    let x = iterableArr[i]; // assign a variable to the first element/index of the array
    if (x === iterableArr[i + 1]) {
      // compare the first element with the second element
      x = iterableArr[i]; // replace variable x with element if they are the same
    } else {
      b.push(iterableArr[i]); // add the element to variable b if they do not match
    }
  } //result.push(array[i] - array[i - 1])
  return b;
};

console.log(uniqueInOrder("AAAABBBCCDAABBB")); //['A','B','C','D','A','B'])
