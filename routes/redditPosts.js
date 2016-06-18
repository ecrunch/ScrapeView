module.exports = function(config) {
	var router 	= config.router;
	var RedditPosts = config.RedditPosts;

router.get('/redditPosts', function (req, res, next) {	
	RedditPosts.find(function(err, redditPosts){
		if(err){
			return next(err);
		}
		
		res.json(redditPosts);
	});
});

};
