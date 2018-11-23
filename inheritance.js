// INHERITANCE

// ES5
function Person(name, birthYear, job){
  this.name = name;
  this.birthYear = birthYear;
  this.job = job;
}

Person.prototype.calculateAge = function(){
  console.log(new Date().getFullYear() - this.birthYear);
}

// Why we use .call?
// 'new' creates a new empty object which calls the Athlete function constrctor and sets the 'this' keyword to the newly created empty object
// In the execution context, the 'this' keyword will point to the new empty object
// If we want the Person properties name, birthYear, and job to be set on a new Athlete object, then we need to call the Person constructor with the 'this' keyword set to the newly created Athlete object
function Athlete(name, birthYear, job, olympicGames, medals){
  Person.call(this, name, birthYear, job);
  this.olympicGames = olympicGames;
  this.medals = medals;
}

// Creating the correct prototype chain -- Object.create allows us to manually set the prototype on an Object
// We want the prototype of the Athlete to become the prototype of the Person so they are connected and allow Athlete to use methods defined on Person etc
// This connects both function constructors and prototype chain will work fine
Athlete.prototype = Object.create(Person.prototype); // Athelte now inherits from Person
Athlete.prototype.constructor = Athlete // otherwise instances of Athlete will have 'instance.constructor === Person'
var athlete = new Athlete('Reggie', 1983, 'Swimmer', 'Mexico', 4);
// console.log(athlete);

Athlete.prototype.wonMedal = function(){
  this.medals++;
}



// ES6
class Person {
  constructor(name, birthYear, job){
    this.name = name;
    this.birthYear = birthYear;
    this.job = job;
  }

  getAge(){
    console.log(new Date().getFullYear() - this.birthYear);
  }
} 

class Athlete extends Person {
  constructor(name, birthYear, job, olympicGames, medals){
    super(name, birthYear, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
  }

  wonMedal(){
    this.medals++;
  }
}

const athlete = new Athlete('Reynaldo', 1986, 'Diver', 'China', 2);


class TownEntity {
  constructor(name, buildYear){
    this.name = name;
    this.buildYear = buildYear;
  }
}

class Park extends TownEntity {
  constructor(name, buildYear, area, trees){
    super(name, buildYear);
    this.area = area;
    this.trees = trees;
  }

  getDensity(){
    const density = this.trees / this.area;
    console.log(`${this.name} Park has a tree density of ${density} trees per square mile.`);
  }
}

class Street extends TownEntity {
  constructor(name, buildYear, length, size){
    super(name, buildYear);
    this.length = length;
    this.size = size;
  }

  classifyStreet(){
    const classification = new Map();
    classification.set(1, 'tiny');
    classification.set(2, 'small');
    classification.set(3, 'normal');
    classification.set(4, 'big');
    classification.set(5, 'huge');
    console.log(`${this.name}, built in ${this.buildYear}, is a ${classification.get(this.size)} street in Juan's Town.`);
  }
}

const oak = new Park('Oakwood Park', 1898, 2000, 901);
const green = new Park('Green Park', 1922, 10000, 2031);
const bougie = new Park('Bougie Park', 1990, 500, 89);
const allParks = [oak, green, bougie];

const ocean = new Street('Ocean Avenue', 2009, 0.5, 3);
const olympic = new Street('Olympic Boulevard', 1988, 2.9, 5);
const evergreen = new Street('Evergreen Street', 1949, 4.3, 1);
const allStreets = [ocean, olympic, evergreen];

// destructuring here will give total sum of ages and averages returned into an array!
const calculateAges = (list) => {
  const sum = list.reduce((prev, current) => {
    return prev + current;
  });
  return [sum, sum / list.length];
}

const parksReport = (list) => {
  // Density
  list.forEach(park => {
    console.log(park.getDensity());
  });

  // Ages
  const treeAges = list.map(park => new Date().getFullYear() - park.buildYear);
  const [totalAges, averageTreeAge] = calculateAges(treeAges);
  console.log(`Our ${list.length} parks have a total age of ${totalAges} and an average age of ${averageTreeAge}.`);

  // More than 1000 trees
  const idx = list.map(el => el.trees).findIndex(el => el >= 1000);
  console.log(`${list[idx].name} has more than 1000 trees.`);
}

const streetsReport = (list) => {
  // Total and Average length  
  const [totalLength, averageLength] = calculateAges(list.map(street => street.length));
  console.log(`Our ${list.length} streets have a total length of ${totalLength} km with an average ${averageLength} km.`);

  // Classify sizes
  list.forEach(street => street.classifyStreet());
}

parksReport(allParks);
streetsReport(allStreets);