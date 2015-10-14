module.exports = function(config) {
	var router 	= config.router;
	var Item = config.Item;


router.get('/items', function (req, res, next) {
	console.log('gettinginrouter');
	Item.find(function(err, items){
		if(err){
			return next(err);
		}
		res.json(items);
	});
});

router.post('/items', function (req, res, next) {
		console.log('inrouter');
	var item = new Item(req.body);

	item.save(function(err, item) {
			if(err) {
				return next(err);
			} else {
				console.log(item);
				res.json(item);
			}
		});
});

};

