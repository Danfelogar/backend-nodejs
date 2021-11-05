import routerx from 'express-promise-router';
import ArtController from '../controllers/Article';
import auth from '../middlewares/auth';

const app = routerx();

//post
app.post('/add',auth.verifyUserStorer,ArtController.add );

//get
app.get('/query',auth.verifyUserStorer, ArtController.query);
app.get('/queryCode',auth.verifyUser, ArtController.queryCode);
app.get('/list',auth.verifyUserStorer, ArtController.list);

//put para actualizar, activar o desactivar articulos
app.put('/update',auth.verifyUserStorer, ArtController.update);
app.put('/activate',auth.verifyUserStorer, ArtController.activate);
app.put('/desactivate',auth.verifyUserStorer, ArtController.desactivate);

//delete
app.delete('/remove',auth.verifyUserStorer,ArtController.remove);


export default app;