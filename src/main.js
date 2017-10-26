import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from 'koa-cors';

import config from 'config';
import errorHandle from 'middleware/errorHandle';
import router from 'routes';

const app = new Koa();

app
.use(cors())
.use(bodyParser())
.use(errorHandle())
.use(router.routes())
.use(router.allowedMethods());

app.listen(config.port);
