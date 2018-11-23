// DESTRUCTURING
// ES5
var ron = ['Ron', 26];
var name = ron[0];
var age = ron[1];

ES6
const [nombre, age] = ['John', 26];
console.log(nombre);
console.log(age);

const person = {
  first: 'Rick',
  last: 'Vega'
}

// using same property names
const {first, last} = person;

// console.log(first);
// console.log(last);

// or setting property names to new variable names
const {first: a, last: b} = person;
// console.log(a);
// console.log(b);

const getRetirement = (year) => {
  const age = (new Date().getFullYear() - year);
  return [age, 65 - age];
}
const [age, retirement] = getRetirement(1989);
console.log(age);
console.log(retirement);
