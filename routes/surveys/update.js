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
      const { Survey } = ctx.models;
      const { id } = ctx.request.params;
      const surveyUpdates = ctx.request.body;
      const { _id } = ctx.state.jwt;

      surveyUpdates.docinfo = {
        updatedAt: new Date().toISOString(),
        updatedBy: _id,
      };

      const survey = await objectToDotNotation(surveyUpdates);
      const updatedSurvey = await Survey.findOneAndUpdate({ _id: id }, { $set: survey }, { new: true })
        .catch((error) => {
          console.error(error);
          ctx.throw(400, `Failed to update survey with id: ${id}`);
        });
      ctx.assert(updatedSurvey, 404, 'survey not found');

      ctx.body = updatedSurvey;
      ctx.status = 200;
    },
  ],
};
