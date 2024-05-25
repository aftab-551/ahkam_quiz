const express = require('express');
const credentialsRouter = express.Router();
const credentialsController = require('../controllers/credentials.controller');

credentialsRouter.post('/credentials/category',credentialsController.addCategory);
credentialsRouter.get('/credentials/category',credentialsController.getAllCategories);
credentialsRouter.delete('/credentials/category',credentialsController.deleteCategory);
credentialsRouter.post('/credentials/scholar',credentialsController.addScholar);
credentialsRouter.get('/credentials/scholar',credentialsController.getAllScholars);
credentialsRouter.delete('/credentials/scholar',credentialsController.deleteScholar);

module.exports = credentialsRouter;