import exception from 'class/exception';

import { request, summary, body, tags, middlewares } from 'swag';

const tag = tags(['User']);
const userSchema = {
  name: { type: 'string', required: true },
  password: { type: 'string', required: true },
};

const logTime = () => async (ctx, next) => {
  console.log(`start: ${new Date()}`);
  await next();
  console.log(`end: ${new Date()}`);
};


export default class UserRouter {
  @request('POST', '/user/register')
  @summary('register user')
  @tag
  @middlewares([logTime()])
  @body(userSchema)
  static async register(ctx) {
    const { name } = ctx.validatedBody;
    const user = { name };
    ctx.body = { user };
  }

  @request('post', '/user/login')
  @summary('user login, password is 123456')
  @tag
  @body(userSchema)
  static async login(ctx) {
    const { name, password } = ctx.validatedBody;
    if (password !== '123456') throw new exception.ForbiddenError('wrong password');
    const user = { name };
    ctx.body = { user };
  }

  @request('get', '/user')
  @summary('user list')
  @tag
  static async getAll(ctx) {
    const users = [{ name: 'foo' }, { name: 'bar' }];
    ctx.body = { users };
  }
}

