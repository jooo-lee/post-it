const db = require('../db');

const getAllMessages = async (req, res) => {
  const messages = await db.getAllMessages();
  res.render('index', { messages: messages });
};

module.exports = { getAllMessages };
