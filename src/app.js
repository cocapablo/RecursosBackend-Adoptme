import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';

import { swaggerEspec } from './config/docConfig.js';
import swaggerUi from "swagger-ui-express";

const app = express();
const PORT = process.env.PORT || 8080;
const urlMongoLocal = "mongodb://127.0.0.1:27017/clase39";
const urlMongoAtlas = "mongodb+srv://cocapablo:FKITs3H3kYgRNPSy@cluster0.u0b3vak.mongodb.net/clase39?retryWrites=true&w=majority";
const urlMongoFinal = process.env.MONGO_URL || urlMongoAtlas;
//const connection = mongoose.connect(urlMongoLocal);
const connection = mongoose.connect(urlMongoFinal); 

console.log("Base de Datos conectada");

app.use(express.json());
app.use(cookieParser());

app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);
//Definir api para ver documentación
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerEspec))

app.listen(PORT,()=>console.log(`Listening on ${PORT}`))
