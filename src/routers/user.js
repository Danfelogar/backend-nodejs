import routerx  from 'express-promise-router';
import UserController from '../controllers/User';
import { check } from 'express-validator';
import valid from '../middlewares/validFile';
import auth from '../middlewares/auth';

const app = routerx();

//post
app.post('/add',[
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Email is required').isEmail(),
    check('Password', 'The password must have more than 5 characters').isLength({min:5, max:16}),
    valid.validFiel,
    auth.verifyUserAdmin
], UserController.add );
app.post('/login',auth.verifyUserAdmin, UserController.login );

//get
app.get('/query',auth.verifyUserAdmin, UserController.query );
app.get('/list',auth.verifyUserAdmin, UserController.list );

//put para actualizar, activar o desactivar articulos
app.put('/update',auth.verifyUserAdmin, UserController.update );
app.put('/activate',auth.verifyUserAdmin, UserController.activate );
app.put('/desactivate',auth.verifyUserAdmin, UserController.desactivate );

//delete
app.delete('/remove', UserController.remove);


export default app;