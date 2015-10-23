var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Todo..' });
});

router.post('/', function(req, res, next) {
  res.render('todolist', { title: 'Express' });
});


module.exports = router;
