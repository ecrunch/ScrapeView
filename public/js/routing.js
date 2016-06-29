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

    .state('redditPostsWall', {
        url: '/redditPostWall',
        templateUrl: 'temps/redditPostWall.html',
        resolve: {
            itemPromise: ['RedditPosts', function(RedditPosts){
                return RedditPosts.getAll();
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
        controller: 'PlacesCtrl',
        resolve: {
            itemPromise: ['Places', function(Places){
                    return Places.getAll();
            }] 
        }
    })

    .state('PlaceTrends', {
        url: '/placeTrends/{woeid}',
        templateUrl: 'temps/placeTrendsPage.html',
        controller: 'PlaceTrendsCtrl',
        resolve: { 
            placeTrends: ['$stateParams','Places', function($stateParams ,Places){
                    
                    return Places.get($stateParams.woeid);
            }] 
        }
    });

    $urlRouterProvider.otherwise('tweetsWall');
}]);