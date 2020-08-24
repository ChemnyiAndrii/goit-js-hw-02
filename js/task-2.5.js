function checkForSpam(str) {
  'use strict';
  // Write code under this line
    let words = str.toLowerCase();
    let fisrstWord = 'spam';
    let secondWord = 'sale';
    if (words.includes(fisrstWord) || words.includes(secondWord))
        return true;
    else
        return false;
}

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
