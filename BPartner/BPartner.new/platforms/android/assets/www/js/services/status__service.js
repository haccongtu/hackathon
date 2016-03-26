(function () {
    'use strict';

    angular
        .module('services')
        .service('StatusService', StatusService);

    StatusService.$inject = ['$state'];

    function StatusService($state) {
        var service = {};

        service.addStatus = function (status) {
            var stts = new Firebase(fire + '/status');
            stts.push(status);
        };

        return service;
    }
})();