/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-spacing */

const mongoose = require('mongoose');

const sizeValidator = [
  (val) => {
    const testVal = val.trim();
    return (testVal.length > 0 && testVal.length <= 50);
  },
  // Custom Error text...
  '{PATH} must be between 1 and 50 characters long',
];

const teamMemberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate: sizeValidator,
  },
});

module.exports = mongoose.model('TeamMember', teamMemberSchema);
