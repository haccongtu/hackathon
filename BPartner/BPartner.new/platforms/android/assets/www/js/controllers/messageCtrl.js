(function () {
    'use strict';

    angular
        .module('controllers')
        .controller('messageCtrl', messageCtrl);

    messageCtrl.$inject = ['$scope', '$state', 'ProfileService', 'AuthService'];
    function messageCtrl($scope, $state, ProfileService, AuthService) {
        $scope.conversation = ConversationService.conversation;

        $scope.sendMessage = sendMessage;

        function sendMessage(id) {
            $state.go('app.conversation', { user1: AuthService.id, user2: id });
        };
    }
})();