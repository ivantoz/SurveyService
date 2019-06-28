const { Joi } = require('koa-joi-router');
const _ = require('lodash');
const createFilterQuery = require('../../lib/createFilterQuery');
Joi.objectId = require('joi-objectid')(Joi);

Joi.singleOrArray = validator => Joi.alternatives().try([Joi.array().items(validator), validator]);

module.exports = {
  method: 'get',
  path: '/',
  validate: {
    query: Joi.object().keys({
      fields: Joi.singleOrArray(Joi.string()),
      search: Joi.string().default(''),
      skip: Joi.number().integer().min(0).default(0),
      limit: Joi.number().integer().min(0)
        .max(100)
        .default(10),
      filter: Joi.object({
        title: Joi.singleOrArray(Joi.string()),
        question: Joi.singleOrArray(Joi.string()),
        _id: Joi.singleOrArray(Joi.objectId()),
      })
        .rename('id', '_id')
        .default(),
      sort: Joi.object().default({ 'title': 1 }),
    }).optional(),
  },
  handler: async (ctx) => {
    const { Survey } = ctx.models;
    const {
      fields, limit, skip, search, filter,
    } = ctx.request.query;
    let { sort } = ctx.request.query;
    let searchQuery = {};
    if (!_.isEmpty(filter)) {
      searchQuery = createFilterQuery(filter, {}, {});
    }
    const select = {};

    if (search) {
      Object.assign(searchQuery, { $text: { $search: search } });
      select.score = { $meta: 'textScore' };
      sort = { score: { $meta: 'textScore' } };
    }

    const [surveys, count] = await Promise.all([
      Survey
        .find(searchQuery, select)
        .limit(Number(limit))
        .skip(Number(skip))
        .sort(sort),
      Survey
        .find(searchQuery, select)
        .count(),
    ]);

    const surveyData = surveys.map(survey => (fields ? _.pick(survey, fields) : survey));

    ctx.body = {
      users: surveyData,
      count,
    };
    ctx.status = 200;
  },
};
