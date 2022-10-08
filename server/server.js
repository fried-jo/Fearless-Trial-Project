require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const itemRouter = require('./routes/items.js');

//Parse JSON fromm incoming request body
app.use(express.json());

//Use items router for requests to /items endpoint
app.use('/items', itemRouter);

//Configure express global error handler
app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' }, 
    };
    const errorObj = Object.assign(defaultErr, err);
    console.log(errorObj.log);
    res.status(errorObj.status).send(errorObj.message);
  });
  
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});
  
module.exports = app;