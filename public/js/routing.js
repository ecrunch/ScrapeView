var app = angular.module('theBlockRouting', ['ui.router']);

app.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state('TweetsWall', {
        url: '/tweetsWall',
        templateUrl: 'temps/tweetsWall.html',
        resolve: {
                itemPromise: ['Tweets', function(Tweets){
                        return Tweets.getAll();
                }]
            }
    })

    .state('TweetSearch', {
        url: '/tweetSearch',
        templateUrl: 'temps/tweetSearch.html',
    })

    .state('Places', {
        url: '/places',
        templateUrl: 'temps/placesPage.html',
        resolve: {
            itemPromise: ['Places', function(Places){
                    return Places.getAll();
            }] 
        }
    });

    $urlRouterProvider.otherwise('TweetsWall');
}]);