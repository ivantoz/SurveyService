module.exports = {
  app: {
    httpsEnabled: false,
  },
  mongo: {
    uri: 'mongodb://localhost/survey',
    debug: true,
  },
  jwt: {
    debugEnabled: true,
  },
  logger: {
    level: 'debug',
  },
};
