const express = require('express');

// controller functions
const {
  signupAdmin,
  loginAdmin,
} = require('../controllers/Admin/adminController');
// const { updatePassword } = require('../controllers/Admin/ChangePassword');

// const { getQuiz } = require('../controllers/User/Quiz');

// const { giveQuiz } = require('');

const router = express.Router();

// login / signup route
router.post('/login', loginAdmin);
router.post('/signup', signupAdmin);

// Change Password
// router.put('/:id/change-password', updatePassword);

// Update Personal Information
// router.get('/:id', updateUserData);

// Quiz Routes
// router.get('/quiz/:id', getQuiz);

module.exports = router;
