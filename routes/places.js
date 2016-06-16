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

};