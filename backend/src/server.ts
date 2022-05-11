import express from 'express';
import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import connectDB from './config/db';

const PORT = process.env.PORT || 5000;
dotenv.config();

// connect to db
connectDB();

const app = express();

// middleware
app.use(express.json());
app.use(bodyParser.json()).use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// routes
// app.use('/api/users', userRoutes)
// app.use('/api/events', eventRoutes)

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}.`);
});
