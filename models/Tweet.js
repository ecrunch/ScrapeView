// grab the mongoose module
var mongoose = require('mongoose');

var TweetSchema = new mongoose.Schema({
	text: 		String,
	user: 		{
				statuses_count : Number,
				description : String,
				friends_count: Number,
				user : String,
				verified : Boolean,
				favourites_count : Number,
				name : String,
				created_at : Date,
				followers_count : Number,
				location : String
				},

	created_at: Date,
	location:	String,
	retweet_count: Number,
	favorite_count: Number,
	entities: 	{
				symbols : Array,
				user_mentions : Array,
				hashtags : Array,
				urls : Array
				},
	source : String


});

mongoose.model('Tweet', TweetSchema);
