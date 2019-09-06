/*
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/


//FCC Solution
function pairElement(str) {
  var newStr = str.split("");
  for(let i=0; i<str.length; i++) {
    switch(str[i]) {
      case "A":
      newStr[i] = newStr[i].concat("T").split("");
      break;
      case "T":
      newStr[i] = newStr[i].concat("A").split("");
      break;
      case "C":
      newStr[i] = newStr[i].concat("G").split("");
      break;
      case "G":
      newStr[i] = newStr[i].concat("C").split("");
      break;
      default:
      break;
    }
  }
  return newStr;
}

pairElement("GCG");

//FCC Solution
function pairElement2(str) {
  var newStr = [];
  var search = function(char) {
    switch(char) {
      case "A":
      newStr.push(['A','T']);
      break;
      case "T":
      newStr.push(['T','A']);
      break;
      case "C":
      newStr.push(['C','G']);
      break;
      case "G":
      newStr.push(['G','C']);
      break;
    }
  };
  for(let i=0; i<str.length; i++) {
    search(str[i]);
  }
  return newStr;
}