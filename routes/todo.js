var express = require('express');
var router = express.Router();
var todoList = require('../models/todoList');
/* GET home page. */
router.get('/', function(req, res, next) {
	todoList.findAll( function ( err, data){
		if(err) res.render('err');
		res.send({ title : "Todo List", todoList : data});	
	});
	
});

module.exports = router;