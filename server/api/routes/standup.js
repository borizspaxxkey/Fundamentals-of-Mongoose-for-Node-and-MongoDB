const Standup = require('../../models/standup');

module.exports = (router) => {
  router.get('/standup', (req, res) => {

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
