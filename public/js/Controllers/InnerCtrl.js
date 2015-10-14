var app = angular.module('InnerCtrl', []);

app.controller('InnerCtrl', [
	'$scope',
	function($scope){
		$scope.selected = $scope.item.images[0];

		$scope.testClicker = function(img,ind){
			$scope.selected = img;
		};

	}]);

