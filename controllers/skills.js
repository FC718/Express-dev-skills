const Skill = require('../models/skills');

module.exports =  {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkills
};

function show (req, res) {
    res.render('skills/show', {
      skills: Skill.getOne(req.params.id)
    });
  }

  function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll()
    });
  }

  function newSkill(req, res) {
    res.render('skills/new', { title: 'New Skills'});
  }
  
  function create(req, res) {
    console.log(req.body);
    Skill.create(req.body);
    res.redirect('/skills');
  }

  function deleteSkills(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
  }