const {
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_HOSTNAME,
  MONGO_PORT,
  MONGO_DB,
} = process.env;

module.exports = {
  app: {
    httpsEnabled: false,
  },
  mongo: {
    uri: `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`,
    debug: true,
  },
  jwt: {
    debugEnabled: true,
  },
  logger: {
    level: 'debug',
  },
};
