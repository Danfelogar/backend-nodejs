import routerx from 'express-promise-router';
import Category from './category';
import Article from './article';
import User from './user';
import Person from './person';
import Sale from './sale';
import Entry from './Entry';

const router = routerx();

router.use('/article', Article);
router.use('/category', Category);
router.use('/user', User);
router.use('/person', Person);
router.use('/sale', Sale);
router.use('/entry', Entry);

export default router;