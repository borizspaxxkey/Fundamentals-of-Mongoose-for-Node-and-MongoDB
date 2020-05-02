const TeamMember = require('../../models/teamMember');

module.exports = (router) => {
  router.get('/team', (req, res) => {

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
