var express = require('express');
const skills = require('../controllers/skills');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');

/* GET checklist listing. */
// All actual paths start wotj "/checklist"

// Get request for /skills
router.get('/', skillsCtrl.index);
router.get('/new', skillsCtrl.new);
// Get /todos/:id
router.get('/:id', skillsCtrl.show);

// Posting /skills
router.post('/', skillsCtrl.create);
router.delete('/:id',skillsCtrl.delete);

module.exports = router;
