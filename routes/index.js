module.exports = function(config) {
	var router 	= config.router;

	/* GET home page. */
	router.get('/', function(req, res, next) {
		res.render('index', { title: 'Express' });
	});

};
