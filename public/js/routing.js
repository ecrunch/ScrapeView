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
                itemPromise: ['Tweets', function(Tweets){
                        return Tweets.getAll();
                }]
            }
    })

    .state('TestUrl', {
        url: '/testInput',
        templateUrl: 'temps/testInput.html',
    })

    .state('TestTrend', {
        url: '/testTrend',
        templateUrl: 'temps/trendsPage.html',
        resolve: {
            itemPromise: ['Places', function(Places){
                    return Places.getAll();
            }] 
        }
    });

    $urlRouterProvider.otherwise('TestWall');
}]);