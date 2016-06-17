var mongoose = require('mongoose');

var RedditPostSchema = new mongoose.Schema({

	subreddit: String,
    title: String,
    author: String,
    created_utc: Number,
    url: String

});

mongoose.model('RedditPost', RedditPostSchema, 'reddit');