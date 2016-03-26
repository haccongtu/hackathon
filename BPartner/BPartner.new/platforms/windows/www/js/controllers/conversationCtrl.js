(function () {
    'use strict';

    angular
        .module('controllers')
        .controller('conversationCtrl', conversationCtrl);
    conversationCtrl.$inject = ['$scope', '$state', '$timeout', '$stateParams', 'ChatService', 'AuthService', '$firebaseArray'];
    function conversationCtrl($scope, $state, $timeout, $stateParams, ChatService, AuthService, $firebaseArray) {
        var data = {};
        var conversation = ChatService.getConversation($stateParams.user1, $stateParams.user2).child('messsages');

        $scope.data = data;
        $scope.addMessage = addMessage;
        $scope.messages = $firebaseArray(conversation);
        conversation.on('child_added', function (childSnapshot, prevChildKey) {
            scrollTo();
        });
        function scrollTo() {
            var ele = document.getElementById("conversation");
            ele.scrollTop = ele.scrollHeight;
        }
        function addMessage() {
            conversation.push({ user: AuthService.user, time: (new Date()).getTime(), text: $scope.data.msg });
            $scope.data.msg = '';
        }
    }
})();