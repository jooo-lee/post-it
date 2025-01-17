const express = require('express');
const path = require('node:path');

const indexRouter = require('./routes/indexRouter');
const messageRouter = require('./routes/messageRouter');

const app = express();
const PORT = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', indexRouter);
app.use('/new', messageRouter);

app.listen(PORT, () => {
  console.log(`Running at http://localhost:${PORT}`);
});
