const { Joi } = require('koa-joi-router');
Joi.objectId = require('joi-objectid')(Joi);


const removeFellowHandler = async (ctx, next) => {
  const { Answer } = ctx.models;
  const { id } = ctx.request.params;

  const answer = await Answer.findById(id);
  ctx.assert(answer, 404, 'answer not found');

  await Answer.findOneAndRemove({ _id: id })
    .catch((error) => {
      console.error(error);
      ctx.throw(400, `Failed to delete answer with id: ${id}`);
    });
  ctx.status = 204;

  return next();
};

module.exports = {
  method: 'delete',
  path: '/:id',
  validate: {
    params: {
      answerId: Joi.objectId(),
    },
  },
  handler: [removeFellowHandler],
};
