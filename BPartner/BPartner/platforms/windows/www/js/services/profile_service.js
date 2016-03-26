(function () {
    'use strict';

    angular
        .module('services')
        .service('ProfileService', ProfileService);

    ProfileService.$inject = ['$firebaseArray'];

    function ProfileService($firebaseArray) {
        var service = {};
        var firebaseObj = new Firebase(fire + 'profiles');
        var syncObj = $firebaseArray(firebaseObj);
        service.profiles = syncObj;
        return service;
    }
})();