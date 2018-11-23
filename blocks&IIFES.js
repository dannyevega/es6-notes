BLOCKS AND IIFES
// ES6
// achieving data privacy
{
  const a = 1;
  let b = 23;
  var c = 'hi';
}

// console.log(a); // ReferenceError: a is not defined
// console.log(b); // wont even get to this line
// console.log(c); // this will print 'hi' because variables are function scoped, not blocked

(function(d){
  var d = 3;
  // console.log(`how you can expose a private variable -- return from inside IIFE`);
})();
// console.log(d); // this will print d is not defined