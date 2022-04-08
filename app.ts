import express from 'express';
const server = express();

server.listen(3000);
server.get('/', function (_, response): void {
  response.set({
    'Access-Control-Allow-Origin': 'http://localhost:63919',
  });
  response.send('Hello, world');
});
