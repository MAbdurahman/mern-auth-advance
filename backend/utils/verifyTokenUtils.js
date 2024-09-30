/************************* imports *************************/
import jwt from 'jsonwebtoken';
import {errorMessageHandler} from './errorMessageHandlerUtils.js';

export const verifyToken = (req, res, next) => {
   const token = req.cookies.token;
   if (!token) {
      return errorMessageHandler(res, 'UnAuthorized - No token provided!', 401);
   }
   try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);


      if (!decoded) {
         return errorMessageHandler(res, 'UnAuthorized - Invalid token!', 401);
      }

      req.userId = decoded.userId;
      next();

   }
   catch (err) {
      next(err);
   }
}//end of verifyToken Function