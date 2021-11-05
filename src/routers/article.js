import routerx from 'express-promise-router';
import ArtController from '../controllers/Article';

const app = routerx();

//post
app.post('/add',ArtController.add );

//get
app.get('/query', ArtController.query);
app.get('/queryCode', ArtController.queryCode);
app.get('/list', ArtController.list);

//put para actualizar, activar o desactivar articulos
app.put('/update', ArtController.update);
app.put('/activate', ArtController.activate);
app.put('/desactivate', ArtController.desactivate);

//delete
app.delete('/remove',ArtController.remove);


export default app;