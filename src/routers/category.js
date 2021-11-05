import routerx from 'express-promise-router';
import CatController from '../controllers/Category';

const app = routerx();
//post
app.post('/add', CatController.add);
//get
app.get('/query', CatController.query);
app.get('/list', CatController.list);
//put
app.put('/update',CatController.update);
app.put('/activate',CatController.activate);
app.put('/desactivate',CatController.desactivate);
//delete
app.delete('/remove',CatController.remove);

export default app;