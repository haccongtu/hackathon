(function () {
    'use strict';

    angular
        .module('controllers')
        .controller('friendCtrl', friendCtrl);
    friendCtrl.$inject = ['$scope', '$state', 'ProfileService', 'AuthService', 'ChatService'];
    function friendCtrl($scope, $state, ProfileService, AuthService, ChatService) {
        $scope.profiles = ProfileService.profiles;
        $scope.user = AuthService.user;
        $scope.sendMessage = sendMessage;

        function sendMessage(id) {
            ChatService.sendMessage(AuthService.id, id);
        };
    }
})();