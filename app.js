const express = require('express');
const path = require('node:path');

const indexRouter = require('./routes/indexRouter');
const formRouter = require('./routes/formRouter');
const messageRouter = require('./routes/messageRouter');

const app = express();
const PORT = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use('/', indexRouter);
app.use('/new', formRouter);
app.use('/messages', messageRouter);

app.listen(PORT, () => {
  console.log(`Running at http://localhost:${PORT}`);
});
