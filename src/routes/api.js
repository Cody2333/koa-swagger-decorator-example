import Router from 'koa-router';

import SampleRouter from 'routes/sample';
import UserRouter from 'routes/user';

import { wrapper } from 'swag';

const router = new Router();

wrapper(router);

// open docs at http://localhost:3000/api/swagger-html
router.swagger({
  prefix: '/api',
  swaggerHtmlEndpoint: '/swagger-html',
  swaggerJsonEndpoint: '/swagger-json',
  title: 'Server',
  description: 'API DOC',
  version: '1.0.0',
});

router.map(SampleRouter);
router.map(UserRouter);
export default router;
