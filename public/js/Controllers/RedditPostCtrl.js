var app = angular.module('RedditPostCtrl', []);

app.controller('RedditPostCtrl', [
'$scope','RedditPosts','$http', 
function($scope, RedditPosts, $http){

	$scope.redditPosts = RedditPosts.redditPosts

}]);
