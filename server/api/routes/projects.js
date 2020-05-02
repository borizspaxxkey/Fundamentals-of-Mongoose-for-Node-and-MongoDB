const Project = require('../../models/project');

module.exports = (router) => {
  router.get('/projects', (req, res) => {

  });

  router.post('/standup', (req, res) => {
    const project = new Project(req.body);
    project.save((err, project) => {
      if (err) {
        return res.status(400).json(err);
      }
      res.status(200).json(project);
    });
  });
};
