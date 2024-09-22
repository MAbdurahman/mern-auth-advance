import {mailtrapClient, sender} from '../config/mailtrapConfig.js';


export async function sendVerificationEmail(email, verificationToken) {
   console.log(`${email}, ${verificationToken}`);
   console.log('sendVerificationEmail...');
}

export async function sendWelcomeEmail() {
   console.log('sendWelcomeEmail...');
}

export async function sendPasswordResetEmail() {
   console.log('sendPasswordResetEmail...');
}

export async function sendResendEmail() {
   console.log('sendResendEmail...');
}
export async function sendResendEmailVerificationEmail() {
   console.log('sendResendEmailVerificationEmail...');
}

export async function sendResetSuccessEmail() {
   console.log('sendResetSuccessEmail...');
}