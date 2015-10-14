var app = angular.module('MainCtrl', []);

app.controller('MainCtrl', [
'$scope', '$stateParams','$state','$interval', 'Main',
function($scope, $stateParams, $state, $interval, Main){
	console.log("in ctrl");
	$scope.items = Main.items;

	var jackets = ["/images/jacket1.jpg",
				 "/images/jacket2.jpg",
				 "/images/jacket3.jpg",
				 "/images/jacket4.jpg",
				 "/images/jacket5.jpg",
				 "/images/jacket6.jpg",
				 "/images/jacket7.jpg"
	];

	var pants = ["images/pants1.jpg",
				"images/pants2.jpg",
				"images/pants3.jpg",
				"images/pants4.jpg",
				"images/pants5.jpg",
				"images/pants6.jpg"		
	];

	var shirts = ["images/shirt1.jpg",
				"images/shirt2.jpg",
				"images/shirt3.jpg",
				"images/shirt4.jpg",
				"images/shirt5.jpg",
				"images/shirt6.jpg",
	];

	var sweaters = ["images/sweater1.jpg",
				"images/sweater2.jpg",
				"images/sweater3.jpg",
				"images/sweater4.jpg"
	];

	var names = ["Taco", "Blueberry", "Burrito", "Kedzie", "Sweet", "Banana", "Apple", "Chia", "Block"];

	var types = ["jacket", "shirt", "pant", "sweater"];

	var descriptions =["My therapist told me the way to achieve true inner peace is to finish what I start. So far I’ve finished two bags of M&Ms and a chocolate cake. I feel better already.",
				"When I die, I want to go peacefully like my grandfather did–in his sleep. Not yelling and screaming like the passengers in his car.",
				"I have six locks on my door all in a row. When I go out, I lock every other one. I figure no matter how long somebody stands there picking the locks, they are always locking three.",
				"Always borrow money from a pessimist. He won’t expect it back.",
				"The scientific theory I like best is that the rings of Saturn are composed entirely of lost airline luggage.",
				"Friendship is like peeing on yourself: everyone can see it, but only you get the warm feeling that it brings.",
				"First the doctor told me the good news: I was going to have a disease named after me.",
				"A successful man is one who makes more money than his wife can spend. A successful woman is one who can find such a man.",
				"How do you get a sweet little 80-year-old lady to say the F word? Get another sweet little 80-year-old lady to yell “BINGO!",];


	$scope.buildTest = function(){


		$scope.name = names[Math.floor(Math.random()*names.length)];
		$scope.type = types[Math.floor(Math.random()*types.length)];
		$scope.description = descriptions[Math.floor(Math.random()*descriptions.length)];

		$scope.images = [];
		
		if ($scope.type === "jacket") {
			$scope.images.push(jackets[Math.floor(Math.random()*jackets.length)]);
		} else if ($scope.type === "shirt") {
			$scope.images.push(shirts[Math.floor(Math.random()*shirts.length)]);
		} else if ($scope.type === "pant") {
			$scope.images.push(pants[Math.floor(Math.random()*pants.length)]);
		} else {
			$scope.images.push(sweaters[Math.floor(Math.random()*sweaters.length)]);
		}
		
		$scope.images.push(sweaters[Math.floor(Math.random()*sweaters.length)]);
		$scope.images.push(pants[Math.floor(Math.random()*pants.length)]);

		Main.create({
			name: ($scope.name + " " + $scope.type),
			shopType:$scope.type,
			images: $scope.images,
			brand: $scope.name,
			description: $scope.description
		});

		$scope.name ='';
		$scope.type ='';
		$scope.images ='';
		$scope.description ='';

		$scope.testObj ='';	
	};

	var stop;

	$scope.amount=100;

	$scope.testBuildInterval = function() {
		console.log('here')
		if (angular.isDefined(stop)) return;

		stop = $interval(function() {
			console.log("interval")
			if ($scope.amount > 0) {
				$scope.amount = $scope.amount - 1;
				$scope.buildTest();
			} else {		
				$scope.stopBuild(); 
			};				
		}, 20);
	};

	$scope.stopBuild = function() {	
		if (angular.isDefined(stop)) {
			$interval.cancel(stop);
			stop = undefined;
			}
		};

		

}]);

