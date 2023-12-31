/* Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA" */

function DNAStrand(dna){
    const dnaArray = dna.split("");
    let newarr = []
    
    for (let x =0; x<dnaArray.length; x++){
      if (dnaArray[x] == "A"){
        newarr+= "T"
      }else if (dnaArray[x] == "T"){
        newarr += "A"
      }else if (dnaArray[x] == "G"){
        newarr+="C"
      } else if (dnaArray[x] == "C"){
        newarr+="G"
      } else{
        newarr+=dnaArray[x]
      }
    }
    return newarr
  }

console.log(DNAStrand("AAAA"))//,"TTTT","String AAAA is")
console.log(DNAStrand("ATTGC"))//,"TAACG","String ATTGC is")
console.log(DNAStrand("GTAT"))//,"CATA","String GTAT is")  
