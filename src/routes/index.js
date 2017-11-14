import Router from 'koa-router';

import SampleRouter from 'routes/sample';
import UserRouter from 'routes/user';

import { wrapper } from 'swag';

const router = new Router();

wrapper(router);

router.swagger({ swaggerHtmlEndpoint: '/swagger-html', swaggerJsonEndpoint: 'swagger-json', title: 'Server', description: 'API DOC', version: '1.0.0' });

router.map(SampleRouter);
router.map(UserRouter);
export default router;
