var app = angular.module('placeService', []);

app.factory('Places', ['$http', function ($http){
	var c = {
		places:[]
	};

	c.getAll = function() {
		console.log('here');
		return $http.get('/places').success(function(data){
			console.log(data)
			angular.copy(data, c.places);
		});
	};

	c.get = function(woeid) {
		console.log("here")
		return $http.get('/places/'+ woeid).then(function(res){
            return res.data;
		});

	}

	console.log('inservice')
	return c;

}]);