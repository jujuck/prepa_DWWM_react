/**
 * Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:

"GCAT"  =>  "GCAU"
The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.
*/


function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  let rna = __________;
  for (let ________ = 0; i < dna.________; i++) {
    if (dna[i] == "T") {
      ________ += "U"
    } else {
      rna += dna[i]
    }
  }
  _____________ rna;
}

console.log(DNAtoRNA("TTTT")) // "UUUU"
console.log((DNAtoRNA("GACCGCCGCC")) // "GACCGCCGCC"
/**
 *Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e.

friend {"Ryan", "Kieran", "Mark"} `shouldBe` {"Ryan", "Mark"}
If there are no friends return {""}.

Note: keep the original order of the names in the output.
 */


function friend(friends){
  const sureFriends = []

  for (let i = 0; i < ____________.length; i++) {
    if (friends[i].length <= 4 && isNaN(+______[i])) {
      sureFriends._________(friends[i])
    }
  }

  return ___________
}

console.log(friend(["Ryan", "Kieran", "Mark"])) // ["Ryan", "Mark"]
console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"])) // ["Ryan"]