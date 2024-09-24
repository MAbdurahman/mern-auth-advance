export const messageHandler = (res, message, success, statusCode) => {
   res.status(statusCode).json({message: message, success: success});

}