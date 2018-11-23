// ASYNCHRONOUS JS

// What is synchronous code? Each line of code is executed line by line in a single thread in the JS engine (order they appear in the code). Simple.
const second = () => {
  console.log("Second here.");
}

const first = () => {
  console.log("Hello, I'm first.");
  second();
  console.log("The end.")
}

first();
// calls on line 14 will print in order (synchronous)
// Hello, I'm first.
// Second here.
// The end.

// What is asynchronous code? Code that is written to be executed at a later time.
const asyncSecond = () => {
  setTimeout(() => {
    console.log("Async second here.");
  }, 3000);
}

const asyncFirst = () => {
  console.log("Hello, I'm first.");
  second();
  console.log("The end.")
}

asyncFirst();
asyncSecond();
// calls on line 32-35 will print in asynchronous order
// Hello, I'm first.
// The end.
// Async second here.



// Image example of asynchronous code
const image = document.getElementById('img').src;

// We pass a callback function here that we want to be executed as soon as the image is done processing
processLargeImage(image, () => {
  console.log('Image processed!');
});

// we DO NOT wait for a function to finish doing its work and then do something with the result
// INSTEAD -- we let the function do its job in the background so we can move on with code execution

// 1. Allow async funcs to run in background
// 2. We pass callback functions that run once the function has finished its work
// 3. Move on immediately -- non blocking

// We can use callback functions to defer actions into the future in order to make our code non-blocking










// ASYNCHRONOUS JS -- Part 2

// Example of callback hell -- old way written
// We are going to use setTimeouts here in order to simulate callbacks
//   - making an api call to get some data
//   - using data returned from first api call to make another api call
//   - using data returned from second api call to make another api call
//   - so on and so on is what is called callback hell

// Callback hell example:
const getRecipe = () => {
  setTimeout(() => {
    const recipeIDs = [234, 545, 934, 733]; // mocking returned data from an api call
    console.log(recipeIDs);

    setTimeout(id => {
      const recipe = {title: "Fire AF Pizza", chef: "Wah"};
      console.log(`${id}: ${recipe.title}`);

      setTimeout(chef => {
        const recipe2 = {title: "Spanish Tapas", chef: "Wah"};
        console.log(recipe2)
      }, 2000, recipe.chef); // passing in chef returned from second api mock to retrieve more data

    }, 2000, recipeIDs[2]); // passing in ID returned from first api mock to retrieve more data

  }, 2000);
}

getRecipe();