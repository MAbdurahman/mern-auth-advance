/************************* imports *************************/
import {errorMessageHandler} from '../utils/errorMessageHandlerUtils.js';



export const signUp = async (req, res, next) => {

   try {
      res.status(201).send({
         message: 'From SignUp Controller',
      })

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