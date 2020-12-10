let changeColor = (newColor) => {
  let ele = document.getElementById('para');
  ele.style.color = newColor;
}

// let palindrome = (string) => {
//   return string === reverse(string);
// } /* THIS IS ESSENTIALLY WHAT WE'RE AIMING FOR */

// REVERSES A STRING.
let reverseIt = (str) => str.split('').reverse().join('');
//
// function palindromeTest(str) {
//   let string = str.toLowerCase();
//   let reverse = reverseIt(string);
//   if (reverse === string) {
//     return 'true';
//   } else {
//     return 'false'
//   }
// }

// AN EXAMPLE OF 'forEach()' IN ACTION
let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
myArr.forEach((ele) => {
  console.log(ele * 2);
});



let words = ['bob', 'gob', 'foo', 'bar', 'baz'];
// PRINTS OUT THE WORDS IN AN ARRAY IN REVERSE
let palindromeFinder = (arr) => {
  arr.forEach((ele) => {
    console.log(reverseIt(ele));
  })
}
