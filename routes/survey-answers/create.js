const { Joi } = require('koa-joi-router');

module.exports = {
  method: 'post',
  path: '/',
  validate: {
    type: 'json',
    body: Joi.object({
      _id: Joi.forbidden(),
      survey_id: Joi.objectId().required(),
      answer: Joi.string().required(),
    }),
  },
  handler: [async (ctx) => {
    const { _id } = ctx.state.jwt;
    const { Answer } = ctx.models;
    const newAnswerTosave = ctx.request.body;

    const answer = await Answer.findOne({ createdBy: _id, survey_id: newAnswerTosave.survey_id })
      .exec();

    if (answer) {
      ctx.throw(400, `Answer for survey with id: ${newAnswerTosave.survey_id} createdBy  ${_id} already exist`);
    }

    newAnswerTosave.docinfo = {
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      createdBy: _id,
    };

    const newAnswer = new Answer(newAnswerTosave);
    ctx.body = await newAnswer.save();
    ctx.status = 201;
  },
  ],
};
