module.exports = function(config) {
	var router 	= config.router;
	var Tweet = config.Tweet;

console.log('here')
router.get('/tweets', function (req, res, next) {
	
	Tweet.find(function(err, tweets){
		
		if(err){
			return next(err);
		}
		res.json(tweets);
	});
});

};

