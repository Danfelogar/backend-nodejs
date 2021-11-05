import routerx  from 'express-promise-router';
import UserController from '../controllers/User';
import { check } from 'express-validator';
import valid from '../middlewares/validFile';

const app = routerx();

//post
app.post('/add',[
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Email is required').isEmail(),
    check('Password', 'The password must have more than 5 characters').isLength({min:5, max:16}),
    valid.validFiel,
], UserController.add );
app.post('/login', UserController.login );

//get
app.get('/query', UserController.query );
app.get('/list', UserController.list );

//put para actualizar, activar o desactivar articulos
app.put('/update', UserController.update );
app.put('/activate', UserController.activate );
app.put('/desactivate', UserController.desactivate );

//delete
app.delete('/remove', UserController.remove);


export default app;