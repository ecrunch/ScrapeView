//import into mega router
var mongoose 	= require('mongoose');
var router 	=   require('express').Router();

var config = {
	router: 	router,
	// Comment: 	mongoose.model('Comment'),
	// Customer: 	mongoose.model('Customer'),
	Item: 		mongoose.model('Item'),
	// Brand: 		mongoose.model('Brand')
};

require('./index.js')(config);
require('./item.js')(config);

module.exports = router;