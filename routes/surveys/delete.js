const { Joi } = require('koa-joi-router');
Joi.objectId = require('joi-objectid')(Joi);


const removeFellowHandler = async (ctx, next) => {
  const { Survey } = ctx.models;
  const { id } = ctx.request.params;

  const survey = await Survey.findById(id);
  ctx.assert(survey, 404, 'survey not found');

  await Survey.findOneAndRemove({ _id: id })
    .catch((error) => {
      console.error(error);
      ctx.throw(400, `Failed to delete survey with id: ${id}`);
    });
  ctx.status = 204;

  return next();
};

module.exports = {
  method: 'delete',
  path: '/:id',
  validate: {
    params: {
      surveyId: Joi.objectId(),
    },
  },
  handler: [removeFellowHandler],
};
