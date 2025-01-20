const { Router } = require('express');
const { createMessage, getForm } = require('../controllers/formController');

const formRouter = Router();

formRouter.get('/', getForm);
formRouter.post('/', createMessage);

module.exports = formRouter;
