const config = require('config');
const mongoose = require('mongoose');


const userSchema = require('./user.schema');
const surveySchema = require('./survey.schema');
const answerSchema = require('./answer.schema');

mongoose.Promise = global.Promise;


const connectionOptions = config.get('mongo.options');

mongoose.connection.on('error', (err) => {
  if (err) {
    console.error(err);
  }
});

mongoose.connection.on('open', (err) => {
  if (err) {
    console.error(err);
  } else {
    console.info(`connected: '${mongoose.connection.db.s.databaseName}'`);
    // console.log('Connection successful to', mongoose.connection.db.s.databaseName);
  }
});

const applyMigrations = async () => Promise.resolve();

if (config.get('app.loggingEnabled')) {
  mongoose.set('debug', true);
}


const models = {
  User: mongoose.model('User', userSchema),
  Survey: mongoose.model('Survey', surveySchema),
  Answer: mongoose.model('Answer', answerSchema),
};

// connect & return promise
// const uri = config.get('mongo.uri');

const {
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_HOSTNAME,
  MONGO_PORT,
  MONGO_DB,
} = process.env;

const options = {
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 500,
  connectTimeoutMS: 10000,
};

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

const waitOnConnection = () => mongoose.connect(url, options)
  .then(() => applyMigrations(mongoose.connection.db));

module.exports = { waitOnConnection, models };
