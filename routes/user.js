const userController= require('../controllers/user.js');
const authController= require('../controllers/auth.js');
const express =require('express');
const router= express.Router();


router.post('/signin', authController.login);
router.post('/signup', authController.createUser);
router.post('/searchresults',userController.searchListings);
router.post('/searchReturnresults', userController.searchReturnListings);
router.put('/updateUserInfo/:userid',userController.updateUser);
router.get('/viewUser', userController.getUser);
router.put('/passwordReset',authController.resetPassword);

module.exports=router;