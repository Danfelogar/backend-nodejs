import routerx from 'express-promise-router';
import Article from './article';

const router = routerx();

router.use('/article', Article);

export default router;