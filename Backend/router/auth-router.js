const express = require("express")
const router = express.Router()
const authController = require('../controllers/auth-controller')


//api get..
router.route('/questions').get(authController.allQuiz)
//api call of questions//
router.route('/questions').post(authController.quiz)
//api update//
router.route('/questions').put(authController.updateQuiz)
//api delete////
router.route('/questions').delete(authController.deleteQuiz)


module.exports = router;