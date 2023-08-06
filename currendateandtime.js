const d = new Date();
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let day = weekday[d.getDay()];
let hour = d.getHours()
let mins = d.getMinutes();
let seconds = d.getSeconds();

console.log("Today is : " + day);
console.log("Current time is : " + hour + ": " + mins + ": "+ seconds)

//Sample Output : Today is : Tuesday.
//Current time is : 10 PM : 30 : 38