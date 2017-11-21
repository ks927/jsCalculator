// vowelCount
function vowelCount(str) {
  //vars
  let count = 0;
  let letters = str.split('')
  let vowels = ['a', 'e', 'i', 'o', 'u']
  
  // loop through letters
  for (i = 0; i < letters.length; i++) {
    // if vowels have letter
    if(vowels.includes(letters[i])) {
      // increase count
      count++
    }
  }
  console.log(count);
}

vowelCount("hello there, world!") // 5