const { Router } = require('express');
const formController = require('../controllers/formController');

const formRouter = Router();

formRouter.get('/', formController.getForm);
formRouter.post('/', formController.createMessage);

module.exports = formRouter;
