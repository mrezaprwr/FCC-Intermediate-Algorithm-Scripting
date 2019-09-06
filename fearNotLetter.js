/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/
//My Solution
function fearNotLetter(str) {
  var index = str.charAt(0).charCodeAt();
  var stop = -1;
  for(let i=0; i<str.length; i++) {
    if(str[i].charCodeAt() !== index) {
      stop = 0;
      break;
    }
    index += 1;
  }
  if(stop===0) {
    return String.fromCharCode(index);
  } else {
    return undefined;
  }
}

fearNotLetter("abce");

//FCC Solution
function fearNotLetter(str) {

  for(var i = 0; i < str.length; i++) {
    /* code of current character */
    var code = str.charCodeAt(i);

    /* if code of current character is not equal to first character + no of iteration
    hence character has been escaped */
    if (code !== str.charCodeAt(0) + i) {

      /* if current character has escaped one character find previous char and return */
      return String.fromCharCode(code - 1);
    }  
  }
  return undefined;
}

// test here
fearNotLetter("abce");