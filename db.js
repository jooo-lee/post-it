const { v4: uuidv4 } = require('uuid');

const messages = [
  {
    id: uuidv4(),
    text: 'Roger roger.',
    user: 'Battle droid',
    added: new Date(),
  },
  {
    id: uuidv4(),
    text: 'Sir, yes sir!',
    user: 'Clone trooper',
    added: new Date(),
  },
  {
    id: uuidv4(),
    text: 'Do or do not, there is no try.',
    user: 'Yoda',
    added: new Date(),
  },
];

const getAllMessages = async () => {
  return messages;
};

const getMessage = async (messageId) => {
  return messages.find((message) => message.id === messageId);
};

const addMessage = async (text, user) => {
  messages.push({ id: uuidv4(), text: text, user: user, added: new Date() });
};

module.exports = { getAllMessages, getMessage, addMessage };
