ARROW FUNCTIONS
// holds lexical environment of 'this' keyword
function Person(name){
  this.name = name;
}

Person.prototype.five = function(friends){
  var arr = friends.map(function(friend) {
    return this.name + ' is friends with ' + friend;
  });
  console.log(arr);
}

const danny = new Person('Danny');
const friends = ['Rich', 'Miggy', 'Dre', 'Kil'];

// danny.five(friends); // will show undefined for this.name -- 'this' loses context outside of function

// a few ways to fix -- .bind passing in this OR using a variable set to 'this' to pass in instead
Person.prototype.five = function(friends){
  var arr = friends.map(function(friend) {
    return this.name + ' is friends with ' + friend;
  }.bind(this));
  console.log(arr);
}

Person.prototype.five = function(friends){
  var self = this;
  var arr = friends.map(function(friend) {
    return self.name + ' is friends with ' + friend;
  });
  console.log(arr);
}
// danny.five(friends);

// Using ES6
Person.prototype.six = function(friends){
  let arr = friends.map(friend => {
    return `${this.name} is friends with ${friend}`;
  });
  console.log(arr);
}
// danny.six(friends);