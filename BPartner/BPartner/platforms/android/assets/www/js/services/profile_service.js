(function () {
    'use strict';

    angular
        .module('services')
        .service('ProfileService', ProfileService);

    ProfileService.$inject = ['$firebaseArray'];

    function ProfileService($firebaseArray) {
        var service = {};

        var firebaseObj = new Firebase(firebaseUrl + 'profiles');
        var syncObj = $firebaseArray(firebaseObj);
        services.profiles = syncObj;
        return services;
    }
})();