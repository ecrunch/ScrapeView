var app = angular.module('theBlockRouting', ['ui.router']);

app.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state('TestWall', {
        url: '/testWall',
        templateUrl: 'temps/testWall.html',
        resolve: {
                itemPromise: ['Main', function(Main){
                        return Main.getAll();
                }]
            }
    });

	$urlRouterProvider.otherwise('TestWall');
}]);