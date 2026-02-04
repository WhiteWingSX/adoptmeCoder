import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import mocksRouter from './routes/mocks.router.js';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 8080;
const MONGO_URL = process.env.MONGO_URL;

app.use(express.json());
app.use(cookieParser());

app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);
app.use('/api/mocks',mocksRouter);

mongoose.connect(MONGO_URL)
    .then(() => {
        console.log("Conectado al servidor");

        app.listen(PORT, () => {
            console.log(`escuchando puerto ${PORT}`);
        });
    })
    .catch(error => {
        console.error("Error al conectar con servidor", error);
    });