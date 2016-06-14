module.exports = function(config) {
	var router 	= config.router;
	var Place = config.Place;
	var Trends = config.Trends;

console.log("at trend")

router.get('/places', function (req, res, next) {
	console.log('gettinginrouter');
	Place.find(function(err, places){
		console.log("1")

		if(err){
			return next(err);
		}
		console.log("2")
		console.log(places)		
		res.json(places);
	});
});

router.get('/places/:woeid', function (req, res, next) {
	console.log('gettinginrouter');
	Trends.find({"location":woeid}, function(err, trends){
		if(err){
			return next(err);
		}
		console.log("2")
		console.log(trends)		
		res.json(trends);
	});
});

};