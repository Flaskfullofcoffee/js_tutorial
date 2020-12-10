// MAPPING

let numbers = [2, 4, 6, 8];
let test = numbers.map(x => x * 2);
console.log(test);

let states = ['Arizona', 'Nevada', 'North Dakota', 'South Dakota'];
let linkMaker = states.map(state => state.toLowerCase().split(/\s+/).join('-'));
// TAKE THE STATES ARRAY & FOR EACH ELEMENT/STATE CHANGE TO LOWERCASE AND WHERE THERE IS WHITE SPACE ADD A '-' INSTEAD.

// Turns strings into url-compatible strings
function urlify(string) {
  return string.map(string => string.toLowerCase().split(/\s+/).join('-'))
}
urlify(states);




// FILTERING
