var data = require('../data.json');

exports.view = function(req, res) {    
	// Your code goes here
	res.render('add');
	var newFriend = {
		name: req.query.name,
		description: req.query.description
	}
	data["friends"].push(newFriend);

 }

