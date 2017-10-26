const env = process.env.NODE_ENV;
const common = {};
const config = {
  develop: {
    port: 3000,
  },
  production: {
    port: 3016,
  },
};

export default Object.assign(common, config[env]);
