(function () {
    'use strict';

    angular
        .module('controllers')
        .controller('messageCtrl', messageCtrl);
    messageCtrl.$inject = ['$scope', '$state', 'ProfileService', 'AuthService'];
    function messageCtrl($scope, $state, ProfileService, AuthService) {
        $scope.profiles = ProfileService.profiles;
        $scope.user = AuthService.user;
    }
})();