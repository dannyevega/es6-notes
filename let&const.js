LET AND CONST
// ES5
// changing value of a var is fine
var name = 'Danny Vega';
var age = 29;
name = 'Wahtholamew';
console.log(name);

// ES6
// you cant change the value of a const
const nombre = 'Danny Vega';
let ano = 29;
nombre = 'Wahh'; // TypeError: Assignment to constant variable.
console.log(nombre);

// ES5
// variables are function scoped
function driversLicence5(passedTest) {
  if(passedTest){
    // console.log(firstName) // this would print undefined because variables are hoisted
    var firstName = 'John';
    var yearOfBirth = 1990;
  }
  console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}
// driversLicence5(true);

// ES6
// const and let are block scoped
// const must be defined at declaration
// let can be declared and defined later
function driversLicence6(passedTest) {
  if(passedTest) {
    // console.log(firstName) // this would print firstName is not defined because let's and consts arent hoisted same way
    let firstName;
    const yearOfBirth = 1990;
  }    
  console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}
// driversLicence6(true); // ReferenceError: firstName is not defined

let i = 20;
for(let i = 0; i < 5; i++){
  // console.log(i);
}
// console.log(i);
// for loop would print 0,1,2,3,4 and console.log on 47 would print 20 because lets are block scoped

var x = 20;
for(var x = 0; x < 5; x++){
  // console.log(x);
}
// console.log(x);
// for loop would print 0,1,2,3,4 and console.log on 54 would print 5 because vars are function scoped