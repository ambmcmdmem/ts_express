import express from 'express';
const server: express.Express = express();

server.listen(3000);
server.get(
  '/',
  function (_: express.Request, response: express.Response): void {
    response.send('Hello, world');
  }
);
