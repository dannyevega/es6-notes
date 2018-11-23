// ARRAYS in ES6

// Let's say we have divs on an HTML file with the class .box on them. we want to grab all of the divs to perform stuff on them. we know using querySelectorAll doesnt return an array with the elements, it returns a node list

const boxes = document.querySelectorAll('.box'); // returns nodes list
// const boxesArray = Array.prototype.slice(boxes); // returns array that allows to perform Array methods
boxesArray.forEach(function(box){
  box.style.backgroundColor = 'dodgerblue';
});


// ES6
Array.from(boxes).forEach(box => {
  box.style.backgroundColor = 'dodgerblue';
};

// CANT USE 'continue' OR 'break' IN A FOREACH OR MAP LOOP

// MUST USE '.for' LOOP TO USE 'continue' OR 'break'

// ES5
for(var i = 0; boxesArray.length; i++){
  if(boxesArray[i].className.includes('box')){
    continue;
  }
  boxesArray[i].textContent = 'whats gucci?';
}

// ES6
for(let box of boxesArray){
  if(box.className === 'box blue'){
    continue;
  }
  boxesArray[i].textContent = 'whats gucci?';
}

// ES5
var wah = [14,12,17,15,21,9,18,20];
var isOfAge = wah.map(function(curr){
  return curr >= 18;
});
isOfAge.indexOf(true); // first index of true
isOfAge[isofAge.indexOf(true)]; // first value

// ES6
isOfAge.findIndex(el => el >= 18);
isOfAge.find(el => el >= 18);