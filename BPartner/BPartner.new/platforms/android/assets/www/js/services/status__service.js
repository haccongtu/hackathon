(function () {
    'use strict';

    angular
        .module('services')
        .service('StatusService', StatusService);

    StatusService.$inject = ['$state', '$firebaseArray'];

    function StatusService($state, $firebaseArray) {
        var service = {};
        var stts = new Firebase(fire + '/status');

        service.addStatus = function (status) {
            stts.push(status);
        };

        service.getStatus = function (LatLnd) {
            return stts;
        }

        return service;
    }
})();