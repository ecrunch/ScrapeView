module.exports = function(config) {
	var router 	= config.router;
	var Tweet = config.RedditPost;

router.get('/redditPosts', function (req, res, next) {
	
	RedditPost.find(function(err, redditPosts){
		
		if(err){
			return next(err);
		}
		res.json(redditPosts);
	});
});

};
