const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might fail
  setTimeout(() => {
    if (Math.random() < 0.5) {
      // Simulate a successful request
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Success!');
    } else {
      // Simulate a failure, but without explicitly calling res.end()
      throw new Error('Simulated server error');
    }
  }, 100);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});