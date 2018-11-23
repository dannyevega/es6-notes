
// ES6 MAPS
// normally we'd use a hash map (object) but this makes it easier for us as well

const question = new Map();
question.set('question', 'Whose mans is this?');
question.set(1, 'My mans');
question.set(2, 'Yer mans');
question.set(3, 'Her mans');
question.set(3, 'His mans');
question.set(4, 'Our mans');
question.set(5, 'Thems mans');
question.set('correct', 2);
question.set(true, 'Correct!');
question.set(false, 'Try again!');

console.log(question.get(3)); // 'Her mans'
console.log(question.size); // 9

if(question.has(4)){
  //question.delete(4);
  console.log('Im here, my guy');
}

// question.clear(); will clear all key/value pairs

// You can use .forEach on Map objects
question.forEach((value, key) => {
  console.log(`This is key ${key} and my value is ${value}`);
});

// can print only values you want with destructuring and checking for value type
for(let [key, value] of question.entries()){
  if(typeof(key) === 'number'){
    console.log(`${key}: ${value}`);
  }
}

const answer = parseInt(prompt('Whose mans is this?'));
console.log(question.get(answer === question.get('correct')));