import routerx from 'express-promise-router';
import personController from '../controllers/Person';

const app = routerx();

//post
app.post('/add',personController.add);
//get
app.get('/query',personController.query);
app.get('/list',personController.list);
app.get('/listCustomers',personController.listCustomer);
app.get('/listProviders',personController.listProvider);
//put
app.put('/update',personController.update);
app.put('/activate',personController.activate);
app.put('/desactivate',personController.desactivate);
//delete
app.delete('/remove',personController.remove);

export default app;