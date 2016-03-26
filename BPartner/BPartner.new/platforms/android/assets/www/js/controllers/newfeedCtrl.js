(function () {
    'use strict';
    angular.module('controllers')
    .controller('feedCtrl', feedCtrl);

    feedCtrl.$inject = ['$scope', 'FeedService'];

    function feedCtrl($scope, FeedService) {
    }
})();