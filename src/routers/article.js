import routerx from 'express-promise-router';
import { get } from 'mongoose';

const app = routerx();

//post
app.post('/add', );

//get
app.get('/query', );
app.get('/queryCode', );
app.get('/list', );

//put para actualizar, activar o desactivar articulos
app.put('/update', );
app.put('/activate', );
app.put('/desactivate', );

//delete
app.delete('/remove',);


export default app;