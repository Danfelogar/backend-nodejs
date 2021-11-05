import routerx from 'express-promise-router';
import Category from './category';
import Article from './article';
import User from './user';
import Person from './person';
import Sale from './sale';

const router = routerx();

router.use('/article', Article);
router.use('/category', Category);
router.use('/user', User);
router.use('/person', Person);
router.use('/sale', Sale);

export default router;