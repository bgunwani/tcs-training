
// Import Http Module
var http = require('http');

// Creating Web Server
var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h2>Hello Everyone...!!</h2>');
    res.end();
});

// Listen Incoming Request on Specific Port
server.listen(3000, () => {
    console.log('The server is running at port 3000!!');
})

