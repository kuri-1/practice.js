function findDifference(a, b) {
    // return an array of a and b
    const i = a
    const x = b

    const mult = i =>{
        let number = 0;
        for (
            let val = 0;
            val < i.length;
            val++
        )
            number = number * i[val];
            return number
    }
  }

console.log(findDifference([3, 2, 5], [1, 4, 4])) // 14)
console.log(findDifference([9, 7, 2], [5, 2, 2])) //106)
console.log(findDifference([11, 2, 5], [1, 10, 8])) //30)
console.log(findDifference([4, 4, 7], [3, 9, 3])) //31)
console.log(findDifference([15, 20, 25], [10, 30, 25])) //0)