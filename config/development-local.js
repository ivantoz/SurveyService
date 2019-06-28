module.exports = {
  app: {
    httpsEnabled: false,
  },
  mongo: {
    uri: 'mongodb://db:27017/survey',
    debug: true,
  },
  jwt: {
    debugEnabled: true,
  },
  logger: {
    level: 'debug',
  },
};
