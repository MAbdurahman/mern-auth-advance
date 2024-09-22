/************************* imports *************************/
import bcryptjs from 'bcryptjs';
import User from '../models/userModel.js';
import {errorMessageHandler} from '../utils/errorMessageHandlerUtils.js';
import ErrorHandler from '../utils/errorHandlerUtils.js';
import {generateTokenAndSetCookie} from '../utils/generateTokenAndSetCookieUtils.js';
import {
   sendVerificationEmail,
   sendWelcomeEmail,
   sendPasswordResetEmail,
   sendResetSuccessEmail
} from '../email/sendEmails.js';


export const signUp = async (req, res, next) => {
   const {email, password, name} = req.body;

   try {
      if (!email) {
         return errorMessageHandler(res, 'Email is required', 400);
      }
      if (!name) {
         return errorMessageHandler(res, 'Name is required', 400);
      }
      if (!password) {
         return errorMessageHandler(res, 'Password is required', 400);
      }

      const userAlreadyExists = await User.findOne({email});
      if (userAlreadyExists) {
         return errorMessageHandler(res, 'User already exists', 401);
      }
      const hashedPassword = await bcryptjs.hash(password, 10);
      const verificationToken = Math.floor(100000 + Math.random() * 900000).toString();

      const user = new User({
         email,
         password: hashedPassword,
         name,
         verificationToken,
         verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
      });

      await user.save();

      generateTokenAndSetCookie(res, user._id);
      await sendVerificationEmail(user, verificationToken);


      res.status(201).json({
         success: true, message: 'User created successfully', user: {
            ...user._doc, password: undefined,
         },
      });

   }
   catch (err) {

      next(err);
   }
}//end of signUp Function

export const signIn = async (req, res, next) => {

   try {
      res.status(201).send({
         message: 'From SignIn Controller',
      })

   }
   catch (err) {
      next(err);
   }
}//end of signIn Function

export const signOut = async (req, res, next) => {

   try {
      res.status(201).send({
         message: 'From SignOut Controller',
      })

   }
   catch (err) {
      next(err);
   }
}//end of signOut Function