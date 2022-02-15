import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
//import compression from 'compression';
import 'dotenv/config';

createConnection()
    .then(res => {
        //console.log(res);
    })
    .catch(err => {
        console.log(err);
    })

const PORT = 4000;

const app = express();
const logger = morgan('dev');

app.use(logger);
app.use(cors({
    origin : true,
    credentials : true
}));




const handleListening = () => console.log(`Server Listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);




