const { Joi } = require('koa-joi-router');
Joi.objectId = require('joi-objectid')(Joi);


module.exports = {
  method: 'get',
  path: '/:id',
  validate: {
    params: {
      id: Joi.objectId(),
    },
  },
  handler: async (ctx) => {
    const { Survey } = ctx.models;
    const { id } = ctx.request.params;
    const survey = await Survey.findById(id)
      .exec();
    ctx.assert(survey, 404, 'survey not found');
    ctx.body = survey;
    ctx.status = 200;
  },
};
