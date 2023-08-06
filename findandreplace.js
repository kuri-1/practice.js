function fakeBin(x) {
    let arr = x.split("");
    let ux = [];

    for (let i =0; i<arr.length;i++){
        if(arr[i]<5){
            ux.push((arr[i]="0"))
        } else if (arr[i]>=5){
            ux.push((arr[i]="1"));
        }
    }
    return ux.join("");
}
    

    //let newX = x.replace(/5/g, "0");
    //return newX;


console.log(fakeBin("45385593107843568")); // '01011110001100111');
console.log(fakeBin("509321967506747")); //, '101000111101101');
console.log(fakeBin("366058562030849490134388085")); //, '011011110000101010000011011');
