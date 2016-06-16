module.exports = function(config) {
	var router 	= config.router;
	var Trends = config.Trends;

router.get('/trends/:woeid', function (req, res, next) {
	Trends.find({"location":woeid}, function(err, trends){
		if(err){
			return next(err);
		}
		res.json(trends);
	});
});

};