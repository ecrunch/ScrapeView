var app = angular.module('MainCtrl', []);

var global_items;

app.controller('MainCtrl', [
'$scope','Tweets', 'Places' ,'$http', 
function($scope, Tweets, Places, $http){

	$scope.tweets = Tweets.tweets;
	$scope.places = Places.places;

	$scope.selected_items = $scope.tweets;

	$scope.refreshTrends = function(woeid){
		console.log("in controller")
		thisTrends = Places.get(woeid)
	}

	$scope.testUrl = function(){
		if($scope.Name === '') { return; }

		Surl =	'http://127.0.0.1:5000/hello/' + $scope.Name
		console.log(Surl)
		$http.get(Surl)
	};

	$scope.getPlaceTrends = function(woeid,id){
		if(woeid === '') { return; }

		Surl =	'http://127.0.0.1:5000/getPlaceTrends/' + woeid + '/' + id
		console.log(Surl)
		$http.get(Surl)
	};
}]);
