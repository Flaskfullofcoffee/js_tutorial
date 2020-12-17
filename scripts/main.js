const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let today = new Date();
let dayName = daysOfTheWeek[today.getDay()];


function reversify(str) {
  let reversed = Array.from(str).reverse().join('').toLowerCase();
  return reversed;
}
function palindromeTester(str) {
  return str.toLowerCase() === reversify(str);
}

let testArray = ['ant', 'bat', 'cat', 'hat'];
testArray.forEach(ele => console.log(ele));

let soliloquy = `To be or not to be, that is the question:`;
Array.from(soliloquy).forEach(char => console.log(char));


//// MAKING URL-APPROPRIATE STRINGS FROM AN ARRAY

// IMPERATIVE VERSION
let states = ['Kansas', 'Nebraska', 'South Dakota', 'North Dakota'];

function imperativeURLS(ele) {
  let urls = [];
  ele.forEach(ele => {
    urls.push(ele.toLowerCase().split(/\s+/).join('-'));
  })
  return urls;
}

//// MAPPING
function urlIt(arr) {
  return arr.map(arr => arr.toLowerCase().split(/\s+/).join('-'))
}

// RETURNS A URL FRIENDLY VERSION OF A STRING
function urlify(str) {
  return str.toLowerCase().split(/\s+/).join('-');
}

// FUNCTIONAL VERSION
function functionalURLs(ele) {
  return ele.map(ele => urlify((`https://example.com/`) + ele));
}
console.log(functionalURLs(states));




//// SOLVING A FILTERING PROBLEM, IMPERATIVELY
//FILTER OUT THE SINGLES: IMPERATIVE VERSION
function imperativeSingles(ele) {
  let singles = []
  ele.forEach(ele => {
    if (ele.split(/\s+/).length === 1) {
      singles.push(ele);
    }
  });
  return singles;
}


// FILTER & MODULO (%)
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.filter(number => number % 2 === 0); // even numbers
numbers.filter(number => number % 2 === 1); // odd numbers

// SINGLES FUNCTIONAL VERSION
function functionalSingles(ele) {
  return ele.filter(ele => ele.split(/\s+/).length === 1);
}

function dakotas(arr) {
  return arr.filter(arr => arr.includes('Dakota'));
}





//// AN IMPERATIVE SOLUTION FOR SUMMING INTEGERS
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// SUM: IMPERATIVE SOLUTION
function imperativeSum(ele) {
  let total = 0;
  ele.forEach((n) => {
    total += n;
  })
  return total;
}
console.log(imperativeSum(numbers));


// REDUCE
numbers.reduce((total, number) => {
  total += number;
  return total;
}, 0);

//// SUM: FUNCTIONAL SOLUTION
function functionalSum(ele) {
  return ele.reduce((total, n) => {
    return total += n;
  });
}

// REDUCE EXAMPLE #2
//// AN IMPERATIVE SOLUTION FOR STATE/LENGTH CORRESPONDENCE

function imperativeLengths(ele) {
  let lengths = {};
  ele.forEach((ele) => {
    lengths[ele] = ele.length;
  });
  return lengths;
}
console.log(imperativeLengths(states));

function functionLengths(ele) {
  return ele.reduce((lengths, state) => {
    lengths[state] = state.length;
    return lengths;
  }, {});
}
