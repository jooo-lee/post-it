const asyncHandler = require('express-async-handler');
const CustomNotFoundError = require('../errors/CustomNotFoundError');
const db = require('../db/queries');
const formatDate = require('../helpers/formatDate');

const getMessage = asyncHandler(async (req, res) => {
  const { messageId } = req.params;
  const message = await db.getMessage(messageId);

  if (!message) {
    throw new CustomNotFoundError('Message not found');
  }

  message.added = formatDate(message.added);
  res.render('message', { message: message });
});

module.exports = { getMessage };
