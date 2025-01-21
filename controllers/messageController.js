const asyncHandler = require('express-async-handler');
const CustomNotFoundError = require('../errors/CustomNotFoundError');
const db = require('../db');

const getMessage = asyncHandler(async (req, res) => {
  const { messageId } = req.params;
  const message = await db.getMessage(messageId);

  if (!message) {
    throw new CustomNotFoundError('Message not found');
  }

  res.render('message', { message: message });
});

module.exports = { getMessage };
