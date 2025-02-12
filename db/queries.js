const pool = require('./pool');

async function getAllMessages() {
  const { rows } = await pool.query(
    'SELECT id, text, username, added FROM messages'
  );
  return rows;
}

async function getMessage(messageId) {
  const { rows } = await pool.query(
    'SELECT text, username, added FROM messages WHERE id=$1',
    [messageId]
  );
  return rows[0];
}

const addMessage = async (text, username) => {
  await pool.query(
    'INSERT INTO messages (text, username, added) VALUES ($1, $2, $3)',
    [text, username, new Date()]
  );
};

module.exports = { getAllMessages, getMessage, addMessage };
