const { Joi } = require('koa-joi-router');
Joi.objectId = require('joi-objectid')(Joi);
const objectToDotNotation = require('../../lib/objectToDotNotation');

module.exports = {
  method: 'patch',
  path: '/:id',
  validate: {
    type: 'json',
    params: {
      id: Joi.objectId().required(),
    },
    body: Joi.object({
      _id: Joi.forbidden(),
    }).unknown(),
  },
  handler: [
    async (ctx) => {
      const { Answer } = ctx.models;
      const { id } = ctx.request.params;
      const answerUpdates = ctx.request.body;
      const { _id } = ctx.state.jwt;

      answerUpdates.docinfo = {
        updatedAt: new Date().toISOString(),
        updatedBy: _id,
      };

      const answer = await objectToDotNotation(answerUpdates);
      const updatedAnswer = await Answer.findOneAndUpdate({ _id: id }, { $set: answer }, { new: true })
        .catch((error) => {
          console.error(error);
          ctx.throw(400, `Failed to update answer with id: ${id}`);
        });
      ctx.assert(updatedAnswer, 404, 'answer not found');

      ctx.body = updatedAnswer;
      ctx.status = 200;
    },
  ],
};
