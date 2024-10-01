const express = require('express');
const userController = require('../controllers/userController');
const authController=require('../controllers/authController')


const router = express.Router();

router.route('/')
.post(userController.createUser)
.get(userController.getAllUsers)

router.route('/:id')
.get(userController.getUser)
.patch(userController.updateUser)
.delete(userController.deleteUser)

router.route('/signup').post(authController.signup)
router.route('/signin').post(authController.signin)

 router.post('/forgotPassword', authController.forgotPassword);

router.post('/verifyToken/:token', authController.verifyToken);

router.post('/changePassword', authController.changePassword);

router.route('/updatePassword').post(authController.protect,authController.updatePassword)
// router.patch('/resetPassword/:token', authController.resetPassword);

module.exports = router;