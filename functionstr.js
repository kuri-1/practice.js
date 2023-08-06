function strCount(str, letter){
    // code here
    let count = 0;
    for (let i=0;
        i < str.length;
        i++){
            if (str[i] === letter)
            count++
        }return count; {
        }
        }

console.log(strCount('Hello', 'o')) // 1;
console.log(strCount('Hello', 'l')) // 2;
strCount('', 'z') // 0
