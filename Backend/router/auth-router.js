const express = require("express")
const questionRouter = express.Router()
const authController = require('../controllers/auth-controller')


//api get..
// router.route('/questions').get(authController.allQuiz)
questionRouter.get('/questions',authController.allQuiz);
//api call of questions//
// router.route('/questions').post(authController.quiz)
questionRouter.post('/questions',authController.quiz);
//api update//
// router.route('/questions').put(authController.updateQuiz)
questionRouter.put('/questions',authController.updateQuiz);
//api delete////
// router.route('/questions').delete(authController.deleteQuiz)
questionRouter.delete('/questions',authController.deleteQuiz);


module.exports = questionRouter;