var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todolistSchema = new Schema({
	task : String
});

var todolist = mongoose.model('todolist',todolistSchema);

module.exports.findAll = function  (callback) {
	
	todolist.find(function ( err, data){
		if (err) console.log(err);
		console.log(todolist);
		callback(null,data);
	});
}

module.exports.findx = function  (data,callback) {
	todoList.find( { 'task' :  data},function ( err, task){
		if (err) console.log(err);
		callback(null,task);
	});
}


 
