/* Use the every() method to check if every element in an array is less than 11. */

let firstArray = [1,2,3,4,5,6,7,8,9,10];
let secondArray = [2,5,7,9,11,13,15];

let everyTrue = firstArray.every(current=> current < 11);
let everyFalse = secondArray.every(current=> current < 11);

return everyTrue;   // true
return everFalse;   // false

