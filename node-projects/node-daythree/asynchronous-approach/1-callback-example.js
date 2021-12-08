const request = require('request');
const fs = require('fs');

// Demonstration 1:

// request('https://ghibliapi.herokuapp.com/films', (error, response, body) => {
//     if (error) {
//         console.log(`Error Occurred : ${error.message}`);
//         return;
//     }
//     if (response.statusCode != 200) {
//         console.error(`Expected Status Code 200 but received ${response.statusCode}`);
//         return;
//     }
//     movies = JSON.parse(body);
//     movies.forEach(movie => {
//         console.log(`${movie.title} : ${movie.release_date}`);
//     });
// });

// ------------------------------------------------------ //

// Demonstration 2:

request('https://ghibliapi.herokuapp.com/films', (error, response, body) => {
    if (error) {
        console.log(`Error Occurred : ${error.message}`);
        return;
    }
    if (response.statusCode != 200) {
        console.error(`Expected Status Code 200 but received ${response.statusCode}`);
        return;
    }
    movies = JSON.parse(body);
    let moviesList = '';
    movies.forEach(movie => {
        moviesList += `${movie.title} : ${movie.release_date}\n`;
    });
    fs.writeFile('./data/callbackMovies.txt', moviesList, (error) => {
        if (error) {
            console.error(`Could not save movies to a file : ${error}`);
            return;
        }
        console.log(`Saved our list of movies to callbackMovies.txt!!`);
    })
});












