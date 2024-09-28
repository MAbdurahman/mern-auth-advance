/************************* imports *************************/
import colors from 'colors';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import {authenticateMiddleware} from '../middlewares/authenticateMiddleware.js';
import {loggerMiddleware} from '../middlewares/loggerMiddleware.js';
import {errorMiddlewareHandler} from '../middlewares/errorMiddleware.js';

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
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser());
app.use(helmet());
app.use(authenticateMiddleware);
app.use(loggerMiddleware);
app.use(errorMiddlewareHandler);

/************************* import all routes *************************/
import homeRoute from '../routes/homeRoute.js';
import authRoutes from '../routes/authRoutes.js';


/****************************** routes ******************************/
app.use('/api/v1.0/', homeRoute);
app.use('/api/v1.0/auth', authRoutes);


export default app;