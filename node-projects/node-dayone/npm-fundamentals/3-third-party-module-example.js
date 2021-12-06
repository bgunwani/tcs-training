
var request = require('request');

request('https://ghibliapi.herokuapp.com/films', (err, response, body) => {
    if (err) {
        console.error(`Error occurred : ${err.meessage}`);
        return;
    }
    if (response.statusCode != 200) {
        console.error(`Expected Status Code 200 but received ${response.statusCode}`);
        return;
    }
    movies = JSON.parse(body);
    movies.forEach(movie => {
        console.log(`${movie.title} : ${movie.release_date}`);
    });
});