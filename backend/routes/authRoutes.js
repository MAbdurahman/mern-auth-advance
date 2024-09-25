/************************* imports *************************/
import express from 'express';
import {
   checkAuthorization,
   signUp,
   signIn,
   signOut,
   verifyEmail,
   forgotPassword,
   resetPassword
} from '../controllers/authController.js';


/************************* variables *************************/
const router = express.Router();

/*************************** routes ***************************/
router.get('/check-authorization', checkAuthorization);
router.post('/sign-up', signUp);
router.post('/sign-in', signIn);
router.post('/sign-out', signOut);
router.post('/verify-email', verifyEmail);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password/:token', resetPassword);


export default router;