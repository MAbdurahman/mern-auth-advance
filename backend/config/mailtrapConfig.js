// Looking to send emails in production? Check out our Email API/SMTP product!

import {MailtrapClient} from 'mailtrap';
import dotenv from 'dotenv';

dotenv.config({path: 'backend/config/config.env'});

export const mailtrapClient = new MailtrapClient({
   endpoint: process.env.MAILTRAP_ENDPOINT,
   token: process.env.MAILTRAP_TOKEN,
   testInboxId: process.env.MAILTRAP_ID,
});

export const sender = {
   email: "hello@example.com",
   name: "MERN Auth Advance",
};

/*
const recipients = [
   {
      email: process.env.MAILTRAP_RECIPIENT,
   }
];

mailtrapClient.testing
   .send({
      from: sender,
      to: recipients,
      subject: "You are awesome!",
      text: "Congrats for sending test email with Mailtrap!",
      category: "Integration Test",
   })
   .then(console.log, console.error);*/