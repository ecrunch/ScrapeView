module.exports = function(config) {
	var router 	= config.router;
	var Place = config.Place;

router.get('/places', function (req, res, next) {
	Place.find(function(err, places){
		if(err){
			return next(err);
		}
		res.json(places);
	});
});

router.get('/places/:id', function(req, res, id) {
	console.log("in route bitch")
	console.log(req.params.id)

	Place.findOne({woeid: req.params.id }, function(err, placeTrends){
		res.json(placeTrends);
		console.log(placeTrends)
	});
});


};