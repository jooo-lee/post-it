const db = require('../db/queries');
const formatDate = require('../helpers/formatDate');

const getAllMessages = async (req, res) => {
  const messages = await db.getAllMessages();
  for (const message of messages) {
    message.added = formatDate(message.added);
  }
  res.render('index', { messages: messages });
};

module.exports = { getAllMessages };
