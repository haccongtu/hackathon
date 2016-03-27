(function () {
    'use strict';
    angular.module('controllers')
    .controller('feedCtrl', feedCtrl);

    feedCtrl.$inject = ['$scope', '$firebaseArray', '$state', 'StatusService', 'AuthService', 'ChatService'];

    function feedCtrl($scope, $firebaseArray, $state, StatusService, AuthService, ChatService) {
        var statuses = $firebaseArray(StatusService.getStatus());
        $scope.statuses = statuses;

        $scope.detail = function (status) {
            console.log(AuthService.id);
            if (AuthService.id !== status.sender.uid)
                $state.go('app.conversation', { user1: AuthService.id, user2: status.sender.uid });
        };
    }


})();