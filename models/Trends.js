var mongoose = require('mongoose');

var TrendsSchema = new mongoose.Schema({

	tweet_volume: Number,
	name: String,
	url: String,
	placeId: Number,
	promoted_content: String,
	location: Number,
	query: String

});

mongoose.model('Trends', TrendsSchema, 'trends');