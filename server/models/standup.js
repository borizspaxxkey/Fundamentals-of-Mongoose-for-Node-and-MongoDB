/* eslint-disable max-len */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-spacing */
const mongoose = require('mongoose');

const requiredStringValidator = [
  (val) => {
    const testVal = val.trim();
    return (testVal.length > 0);
  },
  // Custom error text
  'Please supply a value for {PATH}',
];

const standupSchema = new mongoose.Schema({
  teamMemberId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'teamMembers',
  },
  teamMember: { type: String, required: true, validate: requiredStringValidator },
  project: { type: String, validate: requiredStringValidator },
  workYesterday: { type: String, validate: requiredStringValidator },
  workToday: { type: String, validate: requiredStringValidator },
  impediment: { type: String },
  createdOn: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Standup', standupSchema);


// Disable _id schema example
const noIdSchema = new mongoose.Schema(
  { name: String },
  { _id: false });

// User Schema.add() example
const exampleSchema = new mongoose.Schema;
const useFullName = true;

if (useFullName) {
  exampleSchema.add({
    teamMember: {
      first: String,
      last: String,
    },
  });
} else {
  exampleSchema.add({ teamMember: String });
}
