//import into mega router
var mongoose 	= require('mongoose');
var router 	=   require('express').Router();
console.log('in router')
var config = {
	router: 	router,
	// Comment: 	mongoose.model('Comment'),
	// Customer: 	mongoose.model('Customer'),
	Tweet: 		mongoose.model('Tweet'),
	Place: 		mongoose.model('Place'),
	Trends:     mongoose.model('Trends'),
	// Brand: 		mongoose.model('Brand')
};

require('./index.js')(config);
require('./tweets.js')(config);
require('./places.js')(config);


module.exports = router;