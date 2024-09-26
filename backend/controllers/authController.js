/************************* imports *************************/
import bcryptjs from 'bcryptjs';
import crypto from 'crypto';

import User from '../models/userModel.js';
import {errorMessageHandler} from '../utils/errorMessageHandlerUtils.js';
import {messageHandler} from '../utils/messageHandler.js';
import {generateTokenAndSetCookie} from '../utils/generateTokenAndSetCookieUtils.js';
import {
   sendPasswordResetEmail,
   sendResetSuccessEmail,
   sendVerificationEmail,
   sendWelcomeEmail
} from '../email/sendEmails.js';


export const signUp = async (req, res, next) => {
   const {email, password, name} = req.body;

   try {
      if (!email) {
         return errorMessageHandler(res, 'Please enter email!', 400);
      }
      if (!name) {
         return errorMessageHandler(res, 'Please enter name!', 400);
      }
      if (!password) {
         return errorMessageHandler(res, 'Please enter password!', 400);
      }

      const userAlreadyExists = await User.findOne({email});
      if (userAlreadyExists) {
         return errorMessageHandler(res, 'Email already exists!', 401);
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
      await sendVerificationEmail(user.email, user.name, verificationToken, next);


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
   const {email, password} = req.body;
   if (!email) {
      return errorMessageHandler(res, 'Please enter email!', 400);
   }
   if (!password) {
      return errorMessageHandler(res, 'Please enter password!', 400);
   }

   try {
      const user = await User.findOne({email});
      if (!user) {
         return errorMessageHandler(res, 'Invalid credentials!', 403);
      }

      const isPassword = await bcryptjs.compare(password, user.password);
      if (!isPassword) {
         return errorMessageHandler(res, 'Invalid credentials!', 401);
      }

      generateTokenAndSetCookie(res, user._id);

      user.lastLogin = new Date();
      await user.save();

      res.status(202).json({
         success: true,
         message: "Signed in successfully!",
         user: {
            ...user._doc,
            password: undefined,
         },
      });

   }
   catch (err) {
      next(err);
   }
}//end of signIn Function

export const signOut = async (req, res, next) => {

   try {
     await res.clearCookie('token');
      res.status(201).send({
         message: 'Signed out successfully!',
         success: true
      });

   }
   catch (err) {
      next(err);
   }
}//end of signOut Function

export const verifyEmail = async (req, res, next) => {
   const {code} = req.body;

   try {
      const user = await User.findOne({
         verificationToken: code,
         verificationTokenExpiresAt: { $gt: Date.now() },
      });

      if (!user) {
         return messageHandler(res, 'Invalid or expired Verification Code!', false, 401);
      }
      user.isVerified = true;
      user.verificationToken = undefined;
      user.verificationTokenExpiresAt = undefined;
      await user.save();

      await sendWelcomeEmail(user.email, user.name);

      res.status(200).json({
         success: true,
         message: "Email verified successfully",
         user: {
            ...user._doc,
            password: undefined,
         },
      });
   }
   catch (err) {
      next(err);
   }
}//end of verifyEmail Function

export const forgotPassword = async (req, res, next) => {
   const { email } = req.body;

   try {
      const user = await User.findOne({ email });

      if (!user) {
         /*return res.status(400).json({ success: false, message: "User not found" });*/
         return errorMessageHandler(res, 'User not found', 404);
      }

      //generate the rest token
      const resetToken = crypto.randomBytes(20).toString("hex");
      const resetTokenExpiresAt = Date.now() + (60 * 60 * 1000); // 1 hour

      user.resetPasswordToken = resetToken;
      user.resetPasswordExpiresAt = resetTokenExpiresAt;

      await user.save();

      //send email
      await sendPasswordResetEmail(user.email, user.name, `${process.env.FRONTEND_URL}/reset-password/${resetToken}`);

      res.status(200).json({ success: true, message: "Password reset link sent to your email!" });

   }
   catch (err) {
      next(err);
   }
}//end of forgotPassword Function

export const resetPassword = async (req, res, next) => {
   try {
      const { token } = req.params;
      const { password } = req.body;

      const user = await User.findOne({
         resetPasswordToken: token,
         resetPasswordExpiresAt: { $gt: Date.now() },
      });

      if (!user) {
         return errorMessageHandler(res, 'Invalid or expired token!', 400);
      }

      // update password
      user.password = await bcryptjs.hash(password, 10);
      user.resetPasswordToken = undefined;
      user.resetPasswordExpiresAt = undefined;
      await user.save();

      await sendResetSuccessEmail(user.email, user.name, next);

      res.status(202).json({ success: true, message: "Password reset successful!" });

   }
   catch (err) {
      next(err);
   }

}//end of resetPassword Function

export const checkAuthorization = async (req, res, next) => {
   try {
      const user = await User.findById(req.userId).select("-password");
      if (!user) {
         return errorMessageHandler(res, 'User not found!', 404);
      }

      res.status(202).json({ success: true, user });
   }
   catch (err) {
      next(err);
   }
}//end of checkAuthorization Function