function isPalindrome(x) {
  const newArr = x.split("");
  let backwards = newArr.concat().reverse();
  let updatedbackwards = backwards.join("");

  if (x.toLowerCase() == updatedbackwards.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("a")); // true));
console.log(isPalindrome("aba")); // true));
console.log(isPalindrome("Abba")); // true));
console.log(isPalindrome("hello")); // false));
console.log(isPalindrome("Bob")); // true));
console.log(isPalindrome("Madam")); // true));
console.log(isPalindrome("AbBa")); // true));
console.log(isPalindrome("")); // true));
