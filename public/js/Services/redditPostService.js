var app = angular.module('redditPostService', []);

app.factory('RedditPosts', ['$http', function ($http){
	var r = {
		redditPosts:[]
	};

	r.getAll = function() {
		return $http.get('/redditPosts').success(function(data){
			angular.copy(data, r.redditPosts);
		});
	};
	
	return r;

}]);