/************************* imports *************************/
import colors from 'colors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import {authenticateMiddleware} from '../middlewares/authenticateMiddleware.js';
import {loggerMiddleware} from '../middlewares/loggerMiddleware.js';

/************************* setup config file *************************/
if (process.env.NODE_ENV !== 'production') {
   dotenv.config({path: 'backend/config/config.env'})
}
/************************* variables *************************/
const app = express();
colors.enabled = true;
/************************* middlewares *************************/
if (process.env.NODE_ENV === 'development') {
   app.use(morgan('dev'));
}
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser());
app.use(helmet());
app.use(authenticateMiddleware);
app.use(loggerMiddleware);

/************************* import all routes *************************/
import homeRoute from '../routes/homeRoute.js';
import authRoutes from '../routes/authRoutes.js';


/****************************** routes ******************************/
app.use('/api/v1.0/', homeRoute);
app.use('/api/v1.0/auth', authRoutes);


export default app;