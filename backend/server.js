import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { config } from 'dotenv';

import router from './router/route.js';
import adminRouter from './router/admin.js';
import userRouter from './router/user.js';

import { mongoose } from 'mongoose';

/** import connection file */
// import connect from './database/conn.js';

const app = express();

/** app middlewares */
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
config();

/** routes */
app.use('/api', router); /** apis */
app.use('/api/admin', adminRouter);
app.use('/api/user', userRouter);

app.get('/', (req, res) => {
  try {
    res.json('Get Request');
  } catch (error) {
    res.json(error);
  }
});

/** start server only when we have valid connection */

mongoose.set('strictQuery', false);

// connect to DB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    // Listen for request
    app.listen(process.env.PORT, () => {
      console.log('Connected to DB Listening on port ', process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });

process.env;
