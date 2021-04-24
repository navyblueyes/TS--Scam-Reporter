import express = require('express');

const app = express();

type messageSent = {
  message: string;
};

app.post('/api/1.0/users', (req: express.Request, res: express.Response) => {
  return res.send({ message: 'User created' });
});

module.exports = app;
