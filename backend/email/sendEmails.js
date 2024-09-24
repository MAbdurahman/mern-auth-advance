import {mailtrapClient, sender} from '../config/mailtrapConfig.js';
import {errorMessageHandler} from '../utils/errorMessageHandlerUtils.js';
import {
   passwordResetRequestTemplate,
   passwordResetSuccessTemplate,
   verificationEmailTemplate
} from './emailTemplates.js';
import {response} from 'express';

export async function sendVerificationEmail(email, verificationToken, next) {
   const recipient = [{email}];
   try {
      const response = await mailtrapClient.send({
         from: sender,
         to: recipient,
         subject: "Verify Your Email",
         html: verificationEmailTemplate.replace("{verificationCode}", verificationToken),
         category: "Email Verification",
      });

   }
   catch (err) {
      errorMessageHandler(response, 'Error sending verification email', 400);
      next(err);

   }
}//end of sendVerificationEmail Function

export async function sendWelcomeEmail() {
   console.log('sendWelcomeEmail...');
}//end of sendWelcomeEmail Function

export async function sendPasswordResetEmail() {
   console.log('sendPasswordResetEmail...');
}//end of sendPasswordResetEmail Function

export async function sendResendEmail() {
   console.log('sendResendEmail...');
}//end of sendResendEmail Function

export async function sendResendEmailVerificationEmail() {
   console.log('sendResendEmailVerificationEmail...');
}//end sendResendEmailVerificationEmail Function

export async function sendResetSuccessEmail() {
   console.log('sendResetSuccessEmail...');
}//end sendResetSuccessEmail Function