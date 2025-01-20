const db = require('../db');

const getForm = (req, res) => {
  res.render('form');
};

const createMessage = async (req, res) => {
  const { messageText, messageUser } = req.body;
  await db.addMessage(messageText, messageUser);
  res.redirect('/');
};

module.exports = { getForm, createMessage };
