import routerx from 'express-promise-router';
import CatController from '../controllers/Category';
import auth from '../middlewares/auth';

const app = routerx();
//post
app.post('/add',auth.verifyUserStorer, CatController.add);
//get
app.get('/query',auth.verifyUserStorer, CatController.query);
app.get('/list',auth.verifyUserStorer, CatController.list);
//put
app.put('/update',auth.verifyUserStorer,CatController.update);
app.put('/activate',auth.verifyUserStorer,CatController.activate);
app.put('/desactivate',auth.verifyUserStorer,CatController.desactivate);
//delete
app.delete('/remove',auth.verifyUserStorer,CatController.remove);

export default app;