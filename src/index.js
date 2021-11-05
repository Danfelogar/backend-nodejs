//manera antigua
// const express = require('express');
import express from 'express';
import morgan from 'morgan';
import path from 'path';
import cors from 'cors';
import router from './routers/app';

//db
import pool from './settings/db';

const app =express();

const corsOptions ={
    origin: 'http://example.com',
    optionSuccessStatus: 200
}

app.set('port', process.env.PORT || 3001);

//definicion de middlewares
app.use(morgan('dev'));
// control de acceso http
app.use(cors());

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

//definimos nuestras rutas
app.use('/api', cors(corsOptions), router);

//public para especificar la ruta
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), ()=>{
    console.log('server on port: ', app.get('port'))
});