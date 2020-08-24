function findLongestWord(string = '') {
  // Write code under this line
  let words = string.split(' '); //переведеня в масив
  let longestWord = words[0]; // найбільше слово 1, до нього буде порівнювати
  for (const word of words) { //перебір масива
    const isLongest = word.length > longestWord.length; // умова для перебору 
    if (isLongest) { // якщо слово довше , то вибрати довще
      longestWord = word; 
    }
  }
  return longestWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

console.log(findLongestWord('Google do a roll'));
// 'Google'

console.log(findLongestWord('May the force be with you'));
// 'force'
