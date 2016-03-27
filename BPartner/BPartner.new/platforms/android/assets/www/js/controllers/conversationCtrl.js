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
            var d = new Date();
            conversation.push({ user: AuthService.user, time: d.getFullYear() + "-" + ('0' + (d.getMonth() + 1)).slice(-2) + "-" + ('0' + d.getDate()).slice(-2) + " " + ('0' + d.getHours()).slice(-2) + ":" + ('0' + d.getMinutes()).slice(-2) + ":" + ('0' + d.getSeconds()).slice(-2), text: $scope.data.msg });
            $scope.data.msg = '';
        }
    }
})();