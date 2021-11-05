import routerx from 'express-promise-router';
import SaleController from '../controllers/Sale';

const app = routerx();

//post
app.post('/add', SaleController.add);
//get
app.get('/query', SaleController.query);
app.get('/list', SaleController.list);
app.get('/annualGraph', SaleController.annualGraph);
app.get('/checkDate', SaleController.checkDate);
//put
app.put('/activate', SaleController.activate);
app.put('/desactivate', SaleController.desactivate);


export default app;