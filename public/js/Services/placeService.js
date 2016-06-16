var app = angular.module('placeService', []);

app.factory('Places', ['$http', function ($http){
	var p = {
		places:[]
	};

	p.getAll = function() {
		return $http.get('/places').success(function(data){
			console.log(data)
			angular.copy(data, c.places);
		});
	};

	p.get = function(woeid) {
		return $http.get('/places/'+ woeid).then(function(res){
            return res.data;
		});

	}

	return p;

}]);