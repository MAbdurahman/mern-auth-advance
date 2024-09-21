/************************* imports *************************/
import express from 'express';
import {signUp, signIn, signOut} from '../controllers/authController.js';


/************************* variables *************************/
const router = express.Router();

/*************************** routes ***************************/

router.get('/sign-up', signUp);
router.get('/sign-in', signIn);
router.get('/sign-out', signOut);










export default router;