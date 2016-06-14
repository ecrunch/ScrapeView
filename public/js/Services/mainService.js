var app = angular.module('mainService', []);

app.factory('Tweets', ['$http', function ($http){
	var m = {
		tweets:[]
	};

	m.getAll = function() {
		console.log('here');
		return $http.get('/tweets').success(function(data){
			console.log(data)
			angular.copy(data, m.tweets);
		});
	};

	console.log('inservice')
	return m;

}]);

