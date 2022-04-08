import express from 'express';
const server = express();

server.listen(3000);
server.get('/', function (_, response) {
  response.send('Hello, world');
});
