const skills = require('../models/skills');

module.exports =  {
    index,
    show
};


function show (req, res) {
    res.render('skills/show', {
      skills: skills.getOne(req.params.id)
    });
  }

  function index(req, res) {
    res.render('skills/index', {
      skills: skills.getAll()
    })
  }