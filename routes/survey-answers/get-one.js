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
    const { Answer } = ctx.models;
    const { id } = ctx.request.params;
    const answer = await Answer.findById(id)
      .exec();
    ctx.assert(answer, 404, 'answer not found');
    ctx.body = answer;
    ctx.status = 200;
  },
};
