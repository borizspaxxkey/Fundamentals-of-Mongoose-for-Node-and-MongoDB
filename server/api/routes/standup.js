/* eslint-disable object-curly-spacing */
/* eslint-disable indent */
const Standup = require('../../models/standup');

module.exports = (router) => {
  // Get the 12 newest stand-up meeting notes
  router.get('/standup', (req, res) => {
    Standup.find()
      .sort({ 'createdOn': 1 })
      .exec()
      .then((docs) => res.status(200)
        .json(docs))
      .catch((err) => res.status(500)
        .json({
          message: 'Error finding standup meeting notes',
          error: err,
        }));
  });

  // Get by team member Id
  router.get('/standup/:teamMemberId', (req, res) => {

  });


  router.post('/standup', (req, res) => {
    const note = new Standup(req.body);
    note.save((err, note) => {
      if (err) {
        return res.status(400).json(err);
      }
      res.status(200).json(note);
    });
  });
};
