const express = require('express');
const productRouter = require('./routes/productRoutes')
const userRouter = require('./routes/userRoutes')
const cors = require('cors')


const app = express()

app.use(express.json());

// const corsOptions = {
//   origin: 'http://localhost:3000', // Allow only your frontend
//   optionsSuccessStatus: 200, // Some legacy browsers choke on 204
// };

app.use(cors({
  origin: 'http://localhost:3000', // Your frontend URL
  credentials: true, // Allow credentials (cookies) to be sent
}));

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
  });


  //routes
  app.use('/api/v1/products', productRouter);
  app.use('/api/v1/users', userRouter);
 

  module.exports = app;