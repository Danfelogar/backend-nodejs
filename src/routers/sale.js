import routerx from 'express-promise-router';
import SaleController from '../controllers/Sale';
import auth from '../middlewares/auth';

const app = routerx();

//post
app.post('/add',auth.verifyUserSeller, SaleController.add);
//get
app.get('/query',auth.verifyUserSeller, SaleController.query);
app.get('/list',auth.verifyUserSeller, SaleController.list);
app.get('/annualGraph',auth.verifyUser, SaleController.annualGraph);
app.get('/checkDate',auth.verifyUser, SaleController.checkDate);
//put
app.put('/activate',auth.verifyUserSeller, SaleController.activate);
app.put('/desactivate',auth.verifyUserSeller, SaleController.desactivate);


export default app;