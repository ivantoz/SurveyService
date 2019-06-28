const router = require('koa-joi-router');
const usersRoutes = require('./users');
const surveysRoutes = require('./surveys');
const surveysAnswersRoutes = require('./survey-answers');

const users = router();
users.prefix('/');
users.route(usersRoutes);

const surveys = router();
surveys.prefix('/surveys');
surveys.route(surveysRoutes);

const answers = router();
answers.prefix('/answers');
answers.route(surveysAnswersRoutes);

const routes = {
  users,
  surveys,
  answers,
};

module.exports = routes;
