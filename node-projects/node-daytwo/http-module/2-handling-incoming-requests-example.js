
// Import Http Module
var http = require('http');

// Creating Web Server
var server = http.createServer(function (req, res) {
    if (req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h2>Home Page</h2>');
        res.end();
    } else if (req.url == '/admin') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h2>Admin Portal</h2>');
        res.end();
    } else if (req.url == '/user') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h2>User Portal</h2>');
        res.end();
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<h2 style="color:red">Invalid Request!!</h2>');
        res.end();
    }
});

// Listen Incoming Request on Specific Port
server.listen(3000, () => {
    console.log('The server is running at port 3000!!');
})
