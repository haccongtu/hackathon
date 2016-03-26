(function () {
    'use strict';

    angular
        .module('controllers')
        .controller('friendCtrl', friendCtrl);
    friendCtrl.$inject = ['$scope', '$state', 'ProfileService', 'AuthService'];
    function friendCtrl($scope, $state, ProfileService, AuthService) {
        $scope.profiles = ProfileService.profiles;
        $scope.user = AuthService.user;
    }
})();