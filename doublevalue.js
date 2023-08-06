// take an array and return an array with values doubled
function maps(x){
    let a = []; // create a container for the new array to be added


    for(let i =0; i<x.length; i++){    // iterate through each index. measure against the length of the index. add 1 each time
        a.push(x[i]*2) ;
    }
    return a;
}
console.log(maps([1, 2, 3])) // [2, 4, 6]);
console.log(maps([4, 1, 1, 1, 4])) //[8, 2, 2, 2, 8]); 
console.log(maps([2, 2, 2, 2, 2, 2])) //[4, 4, 4, 4, 4, 4]);