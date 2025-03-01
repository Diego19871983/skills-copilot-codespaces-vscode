// Create web server
// Create a web server that listens on port 3000 and responds with the contents of comments.js when a GET request is made to the root URL.

// The comments.js file contains an array of objects, each with a name and message property. Use the JSON.stringify() method to send the contents as a JSON string.

// The server should respond with a 200 status code and the Content-Type header should be set to application/json.

// The comments.js file is located in the same directory as the server file.

// Use the createServer() method from the http module to create the server.

// Use the listen() method to listen on port 3000.

// Use the fs module to read the contents of comments.js.

// Use the writeHead() method to set the Content-Type header to application/json.

// Use the write() method to send the contents of comments.js as a JSON string.

// Use the end() method to finish the response.

// The server should respond with the contents of comments.js when a GET request is made to the root URL.

// The server should respond with a 200 status code and the Content-Type header should be set to application/json.

// The comments.js file is located in the same directory as the server file.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    fs.readFile('comments.js', (err, data) => {
      if (err) {
        res.end(err.message);
      } else {
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});