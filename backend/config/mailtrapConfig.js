/************************* imports *************************/
import {MailtrapClient} from 'mailtrap';
import dotenv from 'dotenv';

dotenv.config({path: 'backend/config/config.env'});

export const mailtrapClient = new MailtrapClient({
   token: process.env.MAILTRAP_TOKEN,
});

export const sender = {
   email: 'hello@demomailtrap.com',
   name: 'MERN Auth Advance',
};

/*
const recipients = [
   {
      email: process.env.MAILTRAP_RECIPIENT,
   }
];

mailtrapClient
   .send({
      from: sender,
      to: recipients,
      subject: "You are awesome!",
      text: "Congrats for sending test email with Mailtrap!",
      category: "Integration Test",
   })
   .then(console.log, console.error);*/