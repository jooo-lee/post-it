const { v4: uuidv4 } = require('uuid');

const getNewDate = () => {
  const dateOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };
  return new Date().toLocaleString('en-US', dateOptions);
};

const messages = [
  {
    id: uuidv4(),
    text: 'Roger roger.',
    user: 'Battle droid',
    added: getNewDate(),
  },
  {
    id: uuidv4(),
    text: 'Sir, yes sir!',
    user: 'Clone trooper',
    added: getNewDate(),
  },
  {
    id: uuidv4(),
    text: 'Do or do not, there is no try.',
    user: 'Yoda',
    added: getNewDate(),
  },
];

const getAllMessages = async () => {
  return messages;
};

const getMessage = async (messageId) => {
  return messages.find((message) => message.id === messageId);
};

const addMessage = async (text, user) => {
  messages.push({ id: uuidv4(), text: text, user: user, added: getNewDate() });
};

module.exports = { getAllMessages, getMessage, addMessage };
