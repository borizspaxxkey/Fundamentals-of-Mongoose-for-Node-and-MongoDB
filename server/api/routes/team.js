/* eslint-disable object-curly-spacing */
/* eslint-disable indent */
const TeamMember = require('../../models/teamMember');

module.exports = (router) => {
  router.get('/team', (req, res) => {
    TeamMember.find()
      .sort({ 'name': 1 })
      .exec()
      .then((docs) => res.status(200)
        .json(docs))
      .catch((err) => {
        res.status(500)
          .json({
            message: 'Error finding the team members',
            error: err,
          });
      });
  });

  router.post('/standup', (req, res) => {
    const member = new TeamMember(req.body);
    member.save((err, member) => {
      if (err) {
        return res.status(400).json(err);
      }
      res.status(200).json(member);
    });
  });
};
