// taken me 3 days to solve. 90% of the work was done but my return statements  needed changing
function squareSum(numbers){
    let square = []; // empty array to add the squared elements to
    //let sum = 0;

    for (let x = 0; x<numbers.length; x++){ // iterating through each element of the original array
        square.push(numbers[x] **2); // squaring each element and adding it to the empty array variable
    }
    const sum = square.reduce((p,c) => { // sum of the new squarded array
        return p+c; //  need to return the sum
    },0);
    return sum; // need to return the total at the end
}
console.log(squareSum([1,2])) //5
console.log(squareSum([0, 3, 4, 5])) //50
console.log(squareSum([])) //0) 