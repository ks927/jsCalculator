// reverse string
function reverseStr(str) {
  // vars
  letters = str.split('');
  reversedLetters = [];
  
  // loop through letters
  for(i = 0; i < letters.length; i++) {
  // push letter to front of reversedLetter
  reversedLetters.unshift(letters[i]);
  }
  console.log(reversedLetters.join(''))
}

reverseStr('hi there') // ereht ih