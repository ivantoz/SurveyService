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

const surveySchema = new Schema({
  title: { type: String, required: true },
  question: { type: String, trim: true },
  docinfo: {
    type: docinfoSchema,
  },
}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
});

surveySchema.index(
  {
    id: 'text',
  },
);


module.exports = surveySchema;
