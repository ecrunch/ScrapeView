var mongoose = require('mongoose');

var PlaceSchema = new mongoose.Schema({

	placeType: String,
	country: String,
	name: String,
	woeid: Number,
	trends: Array

});

mongoose.model('Place', PlaceSchema, 'place');