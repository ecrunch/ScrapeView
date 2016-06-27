var app = angular.module('TweetsCtrl', []);

app.controller('TweetsCtrl', [
'$scope','Tweets','$http', 
function($scope, Tweets, $http){

	$scope.tweets = Tweets.tweets;

	$scope.links = function(link){
		console.log(link)
			// if link.length == 1:
			// 	return true
			// else
			// 	return false
	}

	$scope.searchTwitterItem = function(){
		if($scope.searchItem === '') { return; }

		Surl =	'http://127.0.0.1:5000/search/' + $scope.searchItem
		console.log(Surl)
		$http.get(Surl)
	};
}]);
