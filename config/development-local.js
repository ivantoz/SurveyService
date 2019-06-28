module.exports = {
  app: {
    httpsEnabled: false,
  },
  mongo: {
    uri: 'mongodb://mongo:27017/survey',
    debug: true,
  },
  jwt: {
    debugEnabled: true,
  },
  logger: {
    level: 'debug',
  },
};
