(function () {
    'use strict';
    angular.module('controllers')
    .controller('feedCtrl', feedCtrl);

    feedCtrl.$inject = ['$scope', 'FeedService'];

    function feedCtrl($scope, FeedService) {
        var feeds = [];
        feeds = FeedService.feeds;
        var ind = 0;
        $scope.buffer = angular.copy(feeds);
        $scope.cachedFeeds = feeds.slice(0, 10);

        $scope.$watch('buffer', function () {
            console.log('data changed');
            ind = 0;
            $scope.cachedFeeds = $scope.buffer.slice(0, 10);
        })
        $scope.loadMore = function () {
            ind = ind + 10
            var r = 10
            if (ind + 10 >= $scope.buffer.length) {
                r = $scope.buffer.length - ind
            }
            console.log("Loading")
            $scope.cachedFeeds = $scope.cachedFeeds.concat($scope.buffer.slice(ind, r + ind))
        }
        $scope.press = function (item) {
            $scope.selectedItem = item
            console.log(item.name)

        }
    }


})();