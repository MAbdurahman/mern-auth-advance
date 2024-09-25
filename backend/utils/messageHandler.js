export const messageHandler = (res, message, success = true, statusCode = 200) => {
   res.status(statusCode).json({message, success});

}