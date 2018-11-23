// PROMISES
// Promises are an ES6 feature developed to deal with asynhronous JS -- solution to so called 'callback hell'

// Promise:
//   - Object that tracks whether an event has happened or not
//   - determines what happens after the event has happened -- event being a setTimeout or API call, for example
//   - implements the concept of a future value that were expecting

// States of Promise:
//   - PENDING: before the event has happened, the Promise is pending
//   - SETTLED/RESOLVED: after the event has happened, the Promise is settled or resolved
//   - FULFILLED: when the Promise is successful and the result is available
//   - REJECTED: when the Promise has an error and the result is rejected

// Example below:
//   - first promise will be responsible for getting result recipeIDs in first setTimeout fake API call above
//   - executer function takes in two arguments: resolve and reject --> these tell Promise whether the event it is handling is successful or not
//   - RESOLVE: event was successful
//   - REJECT: event was not successful

// same as above example, setTimeout only used as example to mock fake API request -- waiting to retrieve some data
// Since setTimeout can never fail, we're mocking a 'resolve' here -- its going to return something -- in real situations, we would need to have resolve and reject so the promise can determine success or not
const getIDs = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([234, 545, 934, 733]);
  }, 2000);
});



// How to consume Promises
// .then: allows us to add an event handler in the case the event was fulfilled -- there was a result
// .catch: allows us to add an event handler in the case the event was fulfilled

// Promise is stored in getIDs variable so we can call .then function on it -- .then function passes a callback function with the result of the successful Promise --> 'IDs' used as the argument
// .catch function is used in the event the result of the Promise is rejected

const getIDs = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([234, 545, 934, 733]);
  }, 2000);
});

getIDs.then(IDs => {
  console.log(IDs);
});



// Since were mocking API call with setTimeout, it will NEVER fail in a setTimeout -- so we're just passing reject here to see a failure

// The beauty of chaining -- we can continue adding functionality with results of each call

const getIDs = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([234, 545, 934, 733]);
  }, 2000);
});

const getRecipes = (recipeId) => {
  return new Promise((resolve, reject) => {
    setTimeout(ID => {
      const recipe = {title: "Fire AF Pizza", chef: "Wah"};
      resolve(recipe);
    }, 2000, recipeId);
  });
}

const getDishes = (chefName) => {
  return new Promise((resolve, reject) => {
    setTimeout(chef => {
      const recipe2 = {title: "Spanish Tapas", chef: "Wah"};
      resolve(`${chef}'s other dishe(s): ${recipe2.title}`);
    }, 2000, chefName);
  });
}

getIDs
.then(IDs => {
  console.log(IDs);
  return getRecipes(IDs[2]);
})
.then(recipe => {
  console.log(recipe);
  return getDishes(recipe.chef);
})
.then(dishes => {
  console.log(dishes);
})
.catch(errors => {
  console.log('errors');
});










// ASYNC/AWAIT
// Async / Await functions -- Used to consume Promises but a  little more advanced
// Looks like synchronous code since it executes line by line but understnd, this is all happening asynchronously in the background

async function getRecipesAsync(){
  const IDs = await getIDs;
  console.log(IDs);
  const recipes = await getRecipes(IDs[2]);
  console.log(recipes);
  const dish = await getDishes(recipes.chef);
  console.log(dish);

  return recipes;
}

// Since we are returning the recipes object in the above async Promise, we can consume it with .then below
getRecipesAsync().then(result => console.log(`${result.title} is ${result.chef}'s second best dish!`));










// FETCH
// Using fetch to make an AJAX request and retrieve data

// using metaweather API -- usually, APIs require a key to retrieve data but this one is easy -- no key needed
// metaweather.com/api

// below call returns 'from origin 'null' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
// this is due to JS same origin policy -- it prevents us from making API requests to a domain different than our own domain
// CORS -- allows us to make requests to different domains, this needs to be implemented on the API that were requesting from
// metaweather API doest have CORS -- usually, we can proxy the request thru our own server -- make AJAX request on our own server where same origin policy doesnt exist then send data to the browser
// We dont have a server here so for simplicity, we can use an extension: crossorigin.me or any CORS chrome plugin

// fetch API gets data and returns a promise -- we have to consume it like we did in above Promise examples

const getTodaysWeather = (cityId) => {
  fetch(`https://www.metaweather.com/api/location/${cityId}/`)
  .then(result => {
    return result.json(); // returns a Promise, we need to resolve with another .then below
  })
  .then(data => {
    const city = data.title;
    const today = data.consolidated_weather[0];
    const min = today.min_temp;
    const max = today.max_temp;
    console.log(`The temperature today in ${city} will be between ${min} and ${max} Celcius.`); 
  })
  .catch(error => {
    console.log(error);
  })  
}

getTodaysWeather(2487956); // San Francisco
getTodaysWeather(44418); // London
// getTodaysWeather(991313); // example to show error, non existing city id










// ASYNC/AWAIT
// same example as above with async/await

// using 'try' below is basically same as .then and .catch -- it will TRY to execute the code and wants it to be successful
// if there is a failure, the catch below is the same and will display the error
async function getTodaysWeather(cityId){
    try {
      const result = await fetch(`https://www.metaweather.com/api/location/${cityId}/`);
      const data = await result.json();
      const display = `The temperature today in ${data.title} will be between ${data.consolidated_weather[0].min_temp} and ${data.consolidated_weather[0].max_temp} Celcius.`;
      console.log(display);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  getTodaysWeather(2487956).then(result => console.log(result.timezone));
  // getTodaysWeather(44418);