var app = angular.module('redditPostsService', []);

app.factory('RedditPosts', ['$http', function ($http){
	var r = {
		redditPosts:[]
	};

	r.getAll = function() {
		return $http.get('/redditPosts').success(function(data){
			angular.copy(data, r.redditPosts);
			console.log(data)
		});
	};
	
	return r;

}]);