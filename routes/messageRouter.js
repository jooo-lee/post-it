const { Router } = require('express');

const messageRouter = Router();

messageRouter.get('/', (req, res) => {
  res.send('new');
});

module.exports = messageRouter;
