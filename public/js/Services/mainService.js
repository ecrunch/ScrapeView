var app = angular.module('mainService', []);

app.factory('Main', ['$http', function ($http){
	var m = {
		items:[]
	};

	m.getAll = function() {
		console.log('here');
		return $http.get('/items').success(function(data){
			angular.copy(data, m.items);
		});
	};


	m.create = function(item) {
		console.log(item);
		return $http.post('/items', item)
		.success(function(data){
			console.log(data);
			m.items.push(data);
		});
	};

	console.log('inservice')
	return m;

}]);