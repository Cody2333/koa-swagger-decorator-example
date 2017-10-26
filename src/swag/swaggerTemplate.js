/**
 * swagger的初始化模板
 * @param {String} title
 * @param {String} description
 * @param {String} version
 */

const init = (title = 'API DOC', description = 'API DOC', version = '1.0.0') => ({
  info: { title, description, version },
  definitions: {},
  securityDefinitions: {
    ApiKeyAuth: {
      type: 'apiKey',
      in: 'header',
      name: 'Authorization'
    }
  },
  paths: {},
  responses: {},
  swagger: '2.0',
  tags: [],
});

export { init };

