(function () {
    'use strict';
    angular.module('controllers')
    .controller('newFeedCtrl', newFeedCtrl);

    newFeedCtrl.$inject = ['$scope', 'FeedService'];

    function newFeedCtrl($scope, FeedService) {
    }
})();