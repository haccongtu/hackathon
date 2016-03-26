(function () {
    'use strict';

    angular
        .module('services')
        .service('ChatService', ChatService);

    ChatService.$inject = ['$rootScope', '$state'];

    function ChatService($rootScope, $state) {
        var service = {};

        service.sendMessage = sendMessage;

        function sendMessage(user1, user2) {
            var user1Conversations = new Firebase(fire + 'profiles/' + user1 + '/conversations');
            var user2Conversations = new Firebase(fire + 'profiles/' + user2 + '/conversations');

            var conversation = null;

            for (var i = 0; i < user1Conversations.length; i++) {
                for (var j = 0; j < user2Conversations.length; j++) {
                    if (user1Conversations[i].key() == user2Conversations[j].key) {
                        conversation = user1Conversations[i];
                    }
                }
            }
            console.log(conversation);

            //if (conversation === null) {
            //    var conversations = new Firebase(fire + 'conversations');
            //    conversation = conversations.push({ time: (new Date()).getTime() });
            //}

            //(new Firebase(fire + 'profiles/' + user1 + '/conversations')).push({ value: conversation.key() });
            //(new Firebase(fire + 'profiles/' + user2 + '/conversations')).push({ value: conversation.key() });

            return conversation.key();
        }

        return service;
    }
})();