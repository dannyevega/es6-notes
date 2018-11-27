// .apply IN ES5 and SPREAD OPERATOR in ES6

// ES5 with .apply
function addWords(a, b, c, d){
  return a + b + c + d;
}
console.log(addWords('Go', 'Fuck', 'Yourself', '!'));

var words = ['Go', 'Fuck', 'Yourself', '!'];
var phrase = addWords.apply(null, words);
console.log(phrase);

// ES6 with Spread Operator -- Spread Operator basically takes an array and transforms them into individual parameters
const palabras = addWords(...words);
console.log(palabras);

const familyOne = ['Reggie', 'Barry', 'Mary', "Clairy"];
const familyTwo = ['Juan', 'Pan', 'Lil Xan', 'Shan'];
const families = [...familyOne, ...familyTwo];
console.log(families);

// Spread opertator works on node lists too
const headers = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const arr = [headers, ...boxes];

Array.from(arr).forEach(element => {
  element.style.color = 'yellow'
});
console.log(arr);










// REST PARAMETERS
// Rest Parameters is the opposite of Spread Operator -- it takes individual values and transforms them into an array when we call a function with multiple parameters

// ES5
function isFullAge(){
  // console.log(arguments); // Arguments Object -- Array like Object but NOT an array -- cant use array methods
  var args = Array.prototype.slice.call(arguments);
  args.forEach(function(element){
    console.log(element >= 18);
  });
}
isFullAge(18, 34, 14, 21, 15);

// ES6
const isFullerAge = (...ages) =>{
  ages.forEach(age => {
    console.log(age >= 18);
  });
}
isFullerAge(18, 34, 14, 21, 15)

// Difference between spread operator and rest parameters:
//   - spread operator: used in function invocation
//   - rest parameters: used in function declaration to take in an arbitrary number of arguments and transform into an array

Passing in more parameters to function
function isFullAge(limit){
  // console.log(arguments); [21, 18, 34, 14, 21, 15]
  var args = Array.prototype.slice.call(arguments, 1);
  // console.log(args); // [18, 34, 14, 21, 15]
  args.forEach(function(element){
    console.log(element >= limit);
  });
}
// isFullAge(21, 18, 34, 14, 21, 15);

// ES6
const isFullerAge = (limit, ...ages) =>{
  ages.forEach(age => {
    console.log(age >= limit);
  });
}
isFullerAge(21, 18, 34, 14, 21, 15)










// DEFAULT PARAMETERS
ES5 -- we can set default parameters in ES5 but its more code for no reason
function Person(first, last, birthYear, nationality){
  this.first = first;
  this.last = last;
  (birthYear === undefined) ? this.birthYear = 1990 : this.birthYear = birthYear;
  (nationality === undefined) ? this.nationality = 'American' : this.nationality = nationality;
}

ES6 default parameters
function Person(first, last, birthYear = 1990, nationality = 'American'){
  this.first = first;
  this.last = last;
  this.birthYear = birthYear;
  this.nationality = nationality;
}

const emily = new Person('Emily', 'Juanga');
const rick = new Person('Rick', 'Vega', 1985, 'Mexican');
console.log(rick);
console.log(emily);