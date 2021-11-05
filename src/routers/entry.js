import routerx from 'express-promise-router';
import EntryController from '../controllers/Entry';
import auth from '../middlewares/auth';

const app = routerx();

//post
app.post('/add',auth.verifyUserStorer, EntryController.add);
//get
app.get('/query',auth.verifyUserStorer, EntryController.query);
app.get('/list',auth.verifyUserStorer, EntryController.list);
app.get('/annualGraph',auth.verifyUser, EntryController.annualGraph);
app.get('/checkDate',auth.verifyUser, EntryController.checkDate);
//put
app.put('/activate',auth.verifyUserStorer, EntryController.activate);
app.put('/desactivate',auth.verifyUserStorer, EntryController.desactivate);


export default app;