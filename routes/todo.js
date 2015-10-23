var express = require('express');
var router = express.Router();
var todoList = require('../models/todoList');
/* GET home page. */
router.get('/', function(req, res, next) {
	todoList.findAll( function ( err, data){
		if(err) res.render('err');
		res.render('todolistResult',{ title : "Todo List", todoList : data});	
	});
	
});

router.post('/', function(req, res, next) {
	var datax = req.body.data;
	console.log(datax);
	todoList.insert(datax, function ( err, data){
		if(err) res.render('err');
		res.render('todolistResult',{ title : "Todo List", todoList : data});
	});
	res.redirect('/');
	
});


module.exports = router;