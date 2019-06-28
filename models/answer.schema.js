const mongoose = require('mongoose');

const { Schema } = mongoose;


const docinfoSchema = new Schema({
  createdAt: {
    type: Date,
  },
  createdBy: {
    type: String,
  },
  updatedAt: {
    type: Date,
  },
  updatedBy: {
    type: String,
  },
},
{
  _id: true,
});

const answerSchema = new Schema({
  survey_id: { type: String, required: true },
  answer: { type: String, trim: true },
  docinfo: {
    type: docinfoSchema,
  },
}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
});

answerSchema.index(
  {
    id: 'text',
  },
);


module.exports = answerSchema;
