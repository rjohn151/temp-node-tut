// Grab the http module
const http = require('http');

// method create server
// parameters in the callback function are objects
const server = http.createServer((request, response )=> {
    if(request.url === '/') {
        response.end(`Ramone's Website`)
    }
    if(request.url === '/about') {
        response.end(`Learn about Ramone`)
    }
    response.end(`
        <h1>OOPs<h1>
        <p>Please proceed to home or about page<p> 
        <a href="/">Home page</a>
    `)
    // response.write(`Welcome to our Ramone's Website`);
    // response.end()
});

// what port our server is listening to
server.listen(3000);