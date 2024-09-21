/************************* imports *************************/
import express from 'express';
import {signUp, signIn, signOut} from '../controllers/authController.js';


/************************* variables *************************/
const router = express.Router();

/*************************** routes ***************************/

router.post('/sign-up', signUp);
router.post('/sign-in', signIn);
router.post('/sign-out', signOut);










export default router;