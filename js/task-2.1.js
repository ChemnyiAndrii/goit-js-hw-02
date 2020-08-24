const getItemsString = function(array) {
  'use strict';
  // Write code under this line
    let message = "";
    for (let i = 0; i < array.length; i++){
        const number = i + 1;
        const namr = array[i];
  //      console.log(number);
  //      console.log(namr);
        message += `${number} - ${namr}\n`;
  }
    return message;
};

console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));
/*

'1 - Mango
2 - Poly
3 - Ajax
4 - Lux
5 - Jay
6 - Kong
'
*/

console.log(getItemsString([5, 10, 15]));
/*
'1 - 5
2 - 10
3 - 15
'
*/