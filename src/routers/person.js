import routerx from 'express-promise-router';
import personController from '../controllers/Person';
import auth from '../middlewares/auth';

const app = routerx();

//post
app.post('/add',auth.verifyUser,personController.add);
//get
app.get('/query',auth.verifyUser,personController.query);
app.get('/list',auth.verifyUser,personController.list);
app.get('/listCustomers',auth.verifyUser,personController.listCustomer);
app.get('/listProviders',auth.verifyUser,personController.listProvider);
//put
app.put('/update',auth.verifyUser,personController.update);
app.put('/activate',auth.verifyUser,personController.activate);
app.put('/desactivate',auth.verifyUser,personController.desactivate);
//delete
app.delete('/remove',auth.verifyUser,personController.remove);

export default app;