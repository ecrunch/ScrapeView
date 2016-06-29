var app = angular.module('placeService', []);

app.factory('Places', ['$http', function ($http){
	var p = {
		places:[]
	};

	p.getAll = function() {
		return $http.get('/places').success(function(data){
			angular.copy(data, p.places);
		});
	};

	p.get = function(woeid) {
		return $http.get('/places/'+ woeid).then(function(res){
            console.log("in service")
            return res.data;
		});

	}

	return p;

}]);