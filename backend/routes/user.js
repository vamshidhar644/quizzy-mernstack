const express = require('express');

// controller functions
const { signupUser, loginUser } = require('../controllers/User/userController');
const { updatePassword } = require('../controllers/User/ChangePassword');

const { getQuiz } = require('../controllers/User/Quiz');

const { giveQuiz } = require('');

const router = express.Router();

// login / signup route
router.post('/login', loginUser);
router.post('/signup', signupUser);

// Change Password
router.put('/:id/change-password', updatePassword);

// Update Personal Information
router.get('/:id', updateUserData);

// Quiz Routes
router.get('/quiz/:id', getQuiz);


module.exports = router;
