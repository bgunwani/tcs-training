
const axios = require('axios');
const fs = require('fs').promises;

// async function getMovies() {
//     let response = await axios.get('https://ghibliapi.herokuapp.com/films')
//     response.data.forEach(movie => {
//         console.log(`${movie.title} : ${movie.release_date}`);
//     })
// }
// getMovies();

// ------------------------------------------------------ //

async function saveMovies() {
    try {
        let response = await axios.get('https://ghibliapi.herokuapp.com/films')
        let moviesList = '';
        response.data.forEach(movie => {
            moviesList += `${movie.title} : ${movie.release_date}\n`;
        })
        await fs.writeFile('./data/asyncAwaitMovies.txt', moviesList);
    } catch (error) {
        console.log(`Could not save the moviesList : ${error}`);
    }
}
saveMovies();











/**
 * The async/await are the keywords, provide an alternative syntax when working with
 * promises. Instead of having the result of a promise in the then() method, the result
 * is returned as a value like in any other function.
 *
 * Syntax:
 *
    async function() {
        await [async action]
    }
 *
 */

