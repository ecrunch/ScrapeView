var app = angular.module('PlacesCtrl', []);

app.controller('PlacesCtrl', [
'$scope', 'Places', '$http', 
function($scope, Places, $http){

	$scope.places = Places.places;
	$scope.redditPosts = RedditPosts.redditPosts;

	$scope.refreshTrends = function(woeid){
		thisTrends = Places.get(woeid)
	}

	$scope.getPlaceTrends = function(woeid,id){
		if(woeid === '') { return; }

		Surl =	'http://127.0.0.1:5000/getPlaceTrends/' + woeid + '/' + id
		$http.get(Surl)
	};
}]);
