(function () {
    'use strict';

    angular
        .module('controllers')
        .controller('conversationCtrl', conversationCtrl);
    conversationCtrl.$inject = ['$scope', '$state', '$stateParams', 'ChatService', 'AuthService', $firebaseArray];
    function conversationCtrl($scope, $state, $stateParams, ChatService, AuthService, $firebaseArray) {
        var data = {};
        var conversation = ChatService.getConversation($stateParams.user1, $stateParams.user2);

        $scope.data = data;
        $scope.addMessage = addMessage;
        $scope.messages = $firebaseArray(conversation);

        function addMessage() {
            conversation.push({ user: AuthService.user, time: (new Date()).getTime(), text: $scope.data.msg });
            $scope.data.msg = '';
        }
    }
})();