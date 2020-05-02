/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-spacing */

const mongoose = require('mongoose');

const teamMemberSchema = new mongoose.Schema({
  name: { type: String },
});

module.exports = mongoose.model('TeamMember', teamMemberSchema);
