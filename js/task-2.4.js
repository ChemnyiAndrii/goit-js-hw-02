function formatString(string, maxLength = 40) {
  // Write code under this line
    let words = string.split('');
    let newString;
    if (words.length > maxLength) {
        words.length = maxLength;
        newString= words.join('') + ('...');
    }
    else 
        newString = words.join('');
    return newString;
}

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// 'Curabitur ligula sapien, tincidunt non.'

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// 'Vestibulum facilisis, purus nec pulvinar...'

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30));
// 'Vestibulum facilisis, purus ne...'
