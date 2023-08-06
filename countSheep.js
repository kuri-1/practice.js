var countSheep = function (num){
    let i = "";
    for (let x = 1; x <= num; x++) {
      i += x + " sheep..."
    }
    
    return i;
  }
console.log(countSheep(0))// "");
console.log(countSheep(1))// "1 sheep...");
console.log(countSheep(2)) // "1 sheep...2 sheep...");
console.log(countSheep(3)) // "1 sheep...2 sheep...3 sheep...");