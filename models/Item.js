// grab the mongoose module
var mongoose = require('mongoose');

var ItemSchema = new mongoose.Schema({
	name: 			String,
	brand: 			String,
	description: 	String,
	shopType:		String,
	sale: 			{type: Number, default: 0},
	comments: 		[{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
	likes: 			{type: Number, default: 0},
	quantity: 		Number,
	dateAdded: 		Date,
	images: 		[{type: String}],
});

mongoose.model('Item', ItemSchema);
