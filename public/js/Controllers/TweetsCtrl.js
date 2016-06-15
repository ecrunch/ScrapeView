var app = angular.module('TweetsCtrl', []);

app.controller('TweetsCtrl', [
'$scope','Tweets','$http', 
function($scope, Tweets, $http){

	$scope.tweets = Tweets.tweets;

	$scope.searchTwitterItem = function(){
		if($scope.searchItem === '') { return; }

		Surl =	'http://127.0.0.1:5000/search/' + $scope.Name
		$http.get(Surl)
	};
}]);
