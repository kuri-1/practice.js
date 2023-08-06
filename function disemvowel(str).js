function disemvowel(str) {
  const ns = str.split("");
  
  let na= [];

  for (let i =0; i<ns.length; i++){
    if (ns[i] != "a" && ns[i] != "e" && ns[i] != "i" && ns[i] != "o" && ns[i] != "u" && ns[i] != "a".toUpperCase() && ns[i] != "e".toUpperCase() && ns[i] != "i".toUpperCase() && ns[i] != "o".toUpperCase() && ns[i] != "u".toUpperCase() ) {
        na=na+ns[i]; 
    } 
  }
  return na; 
}
    



console.log(disemvowel("This website is for losers LOL!")); //, "Ths wbst s fr lsrs LL!")
console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read")); //, "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
console.log(disemvowel("What are you, a communist?")); //, "Wht r y,  cmmnst?")
