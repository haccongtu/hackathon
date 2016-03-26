(function () {
    'use strict';

    angular
        .module('services')
        .service('FeedService', FeedService);


    function FeedService() {

        var feedTemp = [];
        var senderTemp = { id: 1, name: 'Nguyễn văn A', avatar: 'http://www.app.iflipd.com/images/avatar.jpg' };
        
        var services = {};
        for (var i = 1; i < 50; i++) {
            feedTemp.push({
                status: 'Đây là status',
                sender: senderTemp,
                avatar: 'http://www.app.iflipd.com/images/avatar.jpg',
                time: '19:30',
                commentCount: 2,
                percent: 50
            })
        }
        services.feeds = feedTemp;

        services.getFeed = getFeed;
        services.addFeed = addFeed;
        services.editFeed = editFeed;
        services.removeFeed = removeFeed;
        function getFeed(id) {

        }
        function addFeed(messageText) {

        }
        function editFeed(messageText) {

        }
        function removeFeed(messageText) {

        }
        return services;
    }


})();