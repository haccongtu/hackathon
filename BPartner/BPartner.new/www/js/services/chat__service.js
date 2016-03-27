(function () {
    'use strict';

    angular
        .module('services')
        .service('ChatService', ChatService);

    ChatService.$inject = ['$rootScope', '$state'];

    function ChatService($rootScope, $state) {
        var service = {};

        service.getConversation = getConversation;

        function getConversation(user1, user2) {
            var user1ConversationsRef = new Firebase(fire + 'profiles/' + user1 + '/conversations');
            var user2ConversationsRef = new Firebase(fire + 'profiles/' + user2 + '/conversations');

            var conversation = null;
            user1ConversationsRef.once("value", function (user1Conversations) {
                user2ConversationsRef.once("value", function (user2Conversations) {
                    user1Conversations.forEach(function (u1C) {
                        user2Conversations.forEach(function (u2C) {
                            if (u1C.val().value == u2C.val().value) {
                                conversation = new Firebase(fire + 'conversations/' + u1C.val().value);
                                                            }
                        });
                    });
                });
            });
            if (conversation === null) {
                var conversations = new Firebase(fire + 'conversations');
                conversation = conversations.push();

                (new Firebase(fire + 'profiles/' + user1 + '/conversations')).push({ value: conversation.key() });
                (new Firebase(fire + 'profiles/' + user2 + '/conversations')).push({ value: conversation.key() });
            }
            return conversation;
        }

        return service;
    }
})();