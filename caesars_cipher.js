/*A project to fulfill the requirements of the freeCodeCamp JavaScript Algorithms and Data Structures certification.

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher.
In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places.
Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation),
but do pass them on.*/

function rot13(str) {
    let conv = "";//String to store the converted text
    let index;
    for(let i = 0; i < str.length; i++){
      index = str.charCodeAt(i);//Accesses the ASCII value of each character
      if (index >= 65 && index <= 77){//If lowercase were passed the value range would be 97-109
        index += 13;
      } else if (index >= 78 && index <= 90){//If lowercase were passed the value range would be 110-122
        index -= 13;
      }
      conv = conv.concat(String.fromCharCode(index));
    }
    return conv;
  }
  
  rot13("");