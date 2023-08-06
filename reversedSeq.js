function reverseSeq(n) {
    let newStr = [];

    for (let i = 0; n-1; i--){
        newStr+=newStr[i];
    }
    return newStr;

  }


console.log(reverseSeq(5)) //[5, 4, 3, 2, 1];