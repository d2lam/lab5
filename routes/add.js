var data = require('../data.json');

exports.view = function(req, res) {    
	// Your code goes here
	
	var newFriend = {
		'name': req.query.name,
		'description': req.query.description
	}
	res.render('add',newFriend);
	data["friends"].push(newFriend);

 }

