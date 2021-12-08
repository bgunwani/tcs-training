
const axios = require('axios');
const fs = require('fs').promises;

// Demonstration 1:

// axios.get(`https://ghibliapi.herokuapp.com/films`)
//     .then((response) => {
//         response.data.forEach(movie => {
//             console.log(`${movie.title} : ${movie.release_date}`);
//         });
//     })
//     .catch((error) => { console.log(error); });

// ------------------------------------------------------ //

// Demonstration 2:

axios.get(`https://ghibliapi.herokuapp.com/films`)
    .then((response) => {
        let moviesList = '';
        response.data.forEach(movie => {
            moviesList += `${movie.title} : ${movie.release_date}\n`;
        });
        return fs.writeFile('./data/promiseMovies.txt', moviesList);
    })
    .then(() => { console.log('Saved our list of movies to promiseMovies.txt!!') })
    .catch((error) => { console.log(error); });













/**
 * A promise is a JS object that will return a value at some
 * point in the future. Async Functions can return promise objects if
 * the request is fulfilled or rejected.
 *
 * promiseFunction()
 *  .then()     // If Promise is Resolved, Then `Then` method gets executed.
 *  .catch()    // If Promise is Rejected, Then `Catch` method gets executed.
 */