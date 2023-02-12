import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

import clientRoutes from './routes/clientRoutes.js';
import generalRoutes from './routes/generalRoutes.js';
import managementRoutes from './routes/managementRoutes.js';
import salesRoutes from './routes/salesRoutes.js';

const app = express();
const PORT = process.env.PORT;

// Settings
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('common'));
app.use(cors());
app.use(helmet());

// Routes
app.use('/client', clientRoutes);
app.use('/general', generalRoutes);
app.use('/management', managementRoutes);
app.use('/sales', salesRoutes);

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI).then((db) => {
  console.log('DB Connected: ', db.connection.host);
  app.listen(PORT, () => {
    console.log('Server on port: ', PORT);
  });
});
