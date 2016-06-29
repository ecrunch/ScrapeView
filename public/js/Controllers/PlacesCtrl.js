var app = angular.module('PlacesCtrl', []);

app.controller('PlacesCtrl', [
'$scope', 'Places', '$http', 
function($scope, Places, $http){

	$scope.places = Places.places;

	$scope.getPlaceTrends = function(woeid,id){
		if(woeid === '') { return; }

		Surl =	'http://127.0.0.1:5000/getPlaceTrends/' + woeid
		$http.get(Surl)
	};
}]);

app.controller('PlaceTrendsCtrl', [
'$scope', '$stateParams','Places', 'placeTrends','$http', 
function($scope, $stateParams, Places, placeTrends, $http){
	console.log("in controller")

	$scope.searchTwitterItem = function(searchItem){
		if(searchItem === '') { return; }

		Surl =	'http://127.0.0.1:5000/search/' + searchItem
		console.log(Surl)
		$http.get(Surl)
		console.log(Surl)
	};

	$scope.placeTrends = placeTrends;

}]);