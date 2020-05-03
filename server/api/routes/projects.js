/* eslint-disable object-curly-spacing */
/* eslint-disable indent */
const Project = require('../../models/project');

module.exports = (router) => {
  const query = {
    isActive: { $eq: true },
  };
  router.get('/project', (req, res) => {
    Project.find(query)
      .sort({ 'name': 1 })
      .exec()
      .then((docs) => res.status(200)
        .json(docs))
      .catch((err) => res.status(500)
        .json({
          message: 'Error getting active Projects',
          error: err,
        }));
  });

  router.post('/project', (req, res) => {
    const project = new Project(req.body);
    project.save((err, project) => {
      if (err) {
        return res.status(400).json(err);
      }
      res.status(200).json(project);
    });
  });
};
