const express = require('express');
const path = require('node:path');

const indexRouter = require('./routes/indexRouter');
const formRouter = require('./routes/formRouter');
const messageRouter = require('./routes/messageRouter');

const app = express();
const PORT = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Enables use of static assets
const assetsPath = path.join(__dirname, 'public');
app.use(express.static(assetsPath));

// Parses form data into req.body on router.post()
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/new', formRouter);
app.use('/messages', messageRouter);

// Catches thrown errors
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});

app.listen(PORT, () => {
  console.log(`Running at http://localhost:${PORT}`);
});
