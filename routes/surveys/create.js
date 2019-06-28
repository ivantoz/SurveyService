const { Joi } = require('koa-joi-router');

module.exports = {
  method: 'post',
  path: '/',
  validate: {
    type: 'json',
    body: Joi.object({
      _id: Joi.forbidden(),
      title: Joi.string().required(),
      question: Joi.string().required(),
    }),
  },
  handler: [async (ctx) => {
    const { _id } = ctx.state.jwt;
    const { Survey } = ctx.models;
    const newSureyTosave = ctx.request.body;

    const survey = await Survey.findById(newSureyTosave.id)
      .exec();

    if (survey) {
      ctx.throw(400, `Survey with id: ${newSureyTosave.id} already exist`);
    }

    newSureyTosave.docinfo = {
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      createdBy: _id,
    };

    const newSurvey = new Survey(newSureyTosave);
    ctx.body = await newSurvey.save();
    ctx.status = 201;
  },
  ],
};
