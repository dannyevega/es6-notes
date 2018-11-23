// ES6 CLASSES

// IMPORTANT: Classes are not hoisted like function constructors are -- they need to be defined FIRST then can be used
// Dont add anything new -- just syntactic sugar to how we construct prototypical inheritance

ES5
function Person(name, birthYear, job){
  this.name = name;
  this.birthYear = birthYear;
  this.job = job;
}

var ron = new Person('Rontholamew', 1834, 'Developer');

Person.prototype.getAge = function(){
  console.log(new Date().getFullYear() - this.birthYear);
}

// ron.getAge();

// ES6
class NewPerson {
  constructor(name, birthYear, job){
    this.name = name;
    this.birthYear = birthYear;
    this.job = job;
  }

  getAge(){
    console.log(new Date().getFullYear() - this.birthYear);
  }
} 

const wah = new NewPerson('Wahtholamew', 1989, 'Developer');