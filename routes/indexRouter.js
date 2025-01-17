const { Router } = require('express');

const indexRouter = Router();
const messages = [
  {
    text: 'Roger roger.',
    user: 'Battle droid',
    added: new Date(),
  },
  {
    text: 'Sir, yes sir!',
    user: 'Clone trooper',
    added: new Date(),
  },
  {
    text: 'Do or do not, there is no try.',
    user: 'Yoda',
    added: new Date(),
  },
];

indexRouter.get('/', (req, res) => {
  res.render('index', { messages: messages });
});
indexRouter.get('/new', (req, res) => {
  res.send('new');
});

module.exports = indexRouter;
