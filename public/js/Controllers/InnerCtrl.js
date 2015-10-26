var app = angular.module('InnerCtrl', []);

app.controller('InnerCtrl', [
	'$scope',
	function($scope){
		$scope.mainImage = $scope.item.images[0];

		$scope.changeImage = function(img,ind){
			$scope.selected = img;
		};

	}]);

