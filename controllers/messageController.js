const db = require('../db');

const getMessage = async (req, res) => {
  const { messageId } = req.params;
  const message = await db.getMessage(messageId);
  res.render('message', { message: message });
};

module.exports = { getMessage };
