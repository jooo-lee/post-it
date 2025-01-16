const express = require('express');
const indexRouter = require('./routes/indexRouter');
const messageRouter = require('./routes/messageRouter');

const app = express();
const PORT = 3000;

app.use('/', indexRouter);
app.use('/new', messageRouter);

app.listen(PORT, () => {
  console.log(`Running at http://localhost:${PORT}`);
});
