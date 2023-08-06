function abbrevName(name) {
  let i = name.split(" ");
  return (i[0][0] + "." + i[1][0]).toUpperCase();
}
console.log(abbrevName("Sam Harris")); // "S.H");
console.log(abbrevName("Patrick Feenan")); // "P.F");
console.log(abbrevName("Evan Cole")); // "E.C");
console.log(abbrevName("P Favuzzi")); // "P.F");
console.log(abbrevName("David Mendieta")); // "D.M");
