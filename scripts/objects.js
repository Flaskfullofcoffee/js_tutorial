//// WRITING A fUNCTION THAT CAN DETECT PALINDROMES
let test = `Madam, I'm Adam`;
// Reverses a string
function reversify(str) {
  return Array.from(str).reverse().join('');
}
// console.log(reversify(`Racecar`));

// removes any non-letters
function onlyLetters(str) {
  return str.replace(/\W/g, '');
}


// Defines a Phrase object
function Phrase(content) {
  this.content = content;

    this.processedContent = function processedContent() {
      return this.content.toLowerCase();
    }

    this.isPalindrome = function isPalindrome() {
      return this.processedContent() === reversify(this.processedContent());
    }
}
console.log(Phrase(test));

function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  this.processedContent = function processedContent() {
    return this.translation.toLowerCase();
  }
}
TranslatedPhrase.prototype = new Phrase();

String.prototype.reverse = function () {
  return Array.from(this).reverse().join('');
};
