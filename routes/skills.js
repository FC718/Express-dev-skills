var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');

/* GET checklist listing. */
// All actual paths start wotj "/checklist"

// Get request for /skills
router.get('/', skillsCtrl.index);
// Get /todos/:id
router.get('/:id', skillsCtrl.show)

module.exports = router;
