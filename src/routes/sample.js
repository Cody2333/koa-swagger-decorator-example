import { request, summary, query, tags, params } from 'swag';

const tag = tags(['Sample']);

const formData = params('formData');

export default class SampleRouter {
  @request('post', '/sample')
  @summary('sample')
  @tag
  @formData({
    file: { type: 'file' }
  })
  @query({
    page: { type: 'number', default: 1, required: false, description: 'page number' },
    limit: { type: 'number', default: 10, required: false, description: 'return item number limit' }
  })
  static async sample(ctx) {
    const { page, limit } = ctx.validatedQuery;
    console.log(ctx.request);

    ctx.body = { page, limit };
  }
}
